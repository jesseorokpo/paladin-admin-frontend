import { makeAutoObservable, observable, runInAction } from "mobx";
import { authController } from "../../config/sdk";

class AuthManager {
  //@ts-ignore
  user: User;
  status: "AUTHENTICATED" | "INITIAL" = "INITIAL";
  constructor() {
    makeAutoObservable(this, { user: observable });
  }

  initAccountToken(token: string) {
    localStorage.setItem("u-token", token);
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
      let response = await authController.authControllerGetProfile();
      runInAction(() => {
        this.user = response.data;
      });
    } catch (err) {}
  }
}

export const authManager = new AuthManager();
