import { makeAutoObservable, runInAction } from "mobx";
import { lockerApiController, payoutsControllerApi } from "../config/sdk";
import { Locker, Payout } from "../sdk/catalog";

class Manager {
  items: Payout[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadItems() {
    payoutsControllerApi.payoutControllerGetPayoutAdmin().then((payload) => {
      runInAction(() => {
        this.items = payload.data;
      });
    });
  }
}

export const payoutManager = new Manager();
