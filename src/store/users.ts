import { makeAutoObservable, runInAction } from "mobx";
import { usersControllerApi } from "../config/sdk";
import { User } from "../sdk/catalog";

class Manager {
  individuals: User[] = [];
  agents: User[] = [];
  admins: User[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadItems() {
    usersControllerApi.userControllerGetAgents().then((payload) => {
      runInAction(() => {
        this.agents = payload.data;
      });
    });

    usersControllerApi.userControllerGetSystemUsers().then((payload) => {
      runInAction(() => {
        this.admins = payload.data;
      });
    });

    usersControllerApi.userControllerGetIndividuals().then((payload) => {
      runInAction(() => {
        this.individuals = payload.data;
      });
    });
  }
}

export const usersManager = new Manager();
