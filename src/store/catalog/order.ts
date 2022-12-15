import { makeAutoObservable, runInAction } from "mobx";
import { orderControllerApi, productApiController } from "../../config/sdk";
import { Order, UpdateProductDto } from "../../sdk/catalog";

class Manager {
  items: Order[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadItems() {
    orderControllerApi.orderControllerGetOrderAdmin().then((payload) => {
      runInAction(() => {
        this.items = payload.data;
      });
    });
  }


}

export const orderManager = new Manager();
