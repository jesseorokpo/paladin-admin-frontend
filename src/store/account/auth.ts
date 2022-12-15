import { makeAutoObservable, observable, runInAction } from "mobx";
import { authController, configureClientSDK } from "../../config/sdk";
import { UserPublicData } from "../../sdk/auth";

class AuthManager {
  //@ts-ignore
  user: UserPublicData;
  status: "AUTHENTICATED" | "INITIAL" = "INITIAL";
  constructor() {
    makeAutoObservable(this, { user: observable });
  }

  initAccountToken(token: string) {
    localStorage.setItem("u-token", token);
    this.init();
  }

  init() {
    let token = localStorage.getItem("u-token");
    if (token) {
      configureClientSDK(token);
      runInAction(() => {
        this.status = "AUTHENTICATED";
      });
      this.loadProfile();
    }
  }

  async loadProfile() {
    try {
      let response = await authController.authControllerGetProfile();
      console.log(response.data);
      runInAction(() => {
        this.user = response.data;
      });
    } catch (err) {}
  }
}

export const authManager = new AuthManager();
