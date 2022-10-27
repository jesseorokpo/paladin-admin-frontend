import { makeAutoObservable, observable, runInAction } from "mobx";
import { authController, userController } from "../../config/sdk";
import { User } from "../../sdk/auth";

class AuthManager {
  //@ts-ignore
  user: User;
  status: "AUTHENTICATED" | "INITIAL" = "INITIAL";
  constructor() {
    makeAutoObservable(this, { user: observable });
  }

  initAccountToken(token: string) {
    localStorage.setItem("zu-token", token);
    this.init();
  }

  init() {
    let token = localStorage.getItem("zu-token");
    if (token == null) {
      return;
    }
    runInAction(() => {
      this.status = "AUTHENTICATED";
    });
    this.loadProfile();
  }

  async loadProfile() {
    try {
      let response = await userController.getUser();
      runInAction(() => {
        this.user = response.data;
      });
    } catch (err) {}
  }
}

export const authManager = new AuthManager();
