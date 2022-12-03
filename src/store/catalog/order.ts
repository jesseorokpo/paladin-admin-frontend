import { runInAction } from "mobx";
import { orderControllerApi, productApiController } from "../../config/sdk";
import { Order, UpdateProductDto } from "../../sdk/catalog";

class Manager {
  items: Order[] = [];
  constructor() {}

  loadItems() {
    orderControllerApi.orderControllerGet().then((payload) => {
      runInAction(() => {
        this.items = payload.data;
      });
    });
  }

  updateItem(id: string, payload: UpdateProductDto) {
    orderControllerApi.orderControllerCompleted(id).then((payload) => {
      runInAction(() => {
        // @ts-ignore
        const index = this.items.findIndex((element) => element._id == id);
        this.items[index] = { ...payload, ...this.items[index] };
      });
    });
  }
}

export const orderManager = new Manager();
