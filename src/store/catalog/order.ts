import { makeAutoObservable, runInAction } from "mobx";
import { orderControllerApi, productApiController } from "../../config/sdk";
import { Order, UpdateProductDto } from "../../sdk/catalog";

class Manager {
  items: Order[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadItems() {
    orderControllerApi
      .orderControllerGetOrderAdmin()
      .then((payload) => {
        console.log(payload);
        runInAction(() => {
          this.items = payload.data;
        });
      })
      .catch(console.log);
  }
}

export const orderManager = new Manager();
