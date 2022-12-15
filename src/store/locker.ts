import { makeAutoObservable, runInAction } from "mobx";
import { lockerApiController } from "../config/sdk";
import { Locker } from "../sdk/catalog";

class Manager {
  items: Locker[] = [];
  
  constructor() {
    makeAutoObservable(this);
  }

  loadItems() {
    lockerApiController.lockerControllerGetLockerAdmin().then((payload) => {
      console.log(payload);
      runInAction(() => {
        this.items = payload.data;
      });
    });
  }
}

export const lockerManager = new Manager();
