import { showNotification } from "@mantine/notifications";
import { makeAutoObservable, observable } from "mobx";
import { AuthApi, LoginDto } from "../../sdk/auth";
import { AxiosError } from "axios";
import {
  startNavigationProgress,
  completeNavigationProgress,
} from "@mantine/nprogress";
import { handleAxiosError } from "../../utils";
import { authManager } from "./auth";
import { authController } from "../../config/sdk";

class LoginManager {
  //@ts-ignore
  user: User;
  constructor() {
    makeAutoObservable(this, { user: observable });
  }

  async login(request: LoginDto) {
    try {
      startNavigationProgress();
      let response = await authController.authControllerLogin(request);
      authManager.initAccountToken(response.data.token);
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Authentication failed..." });
      completeNavigationProgress();
    }
  }
}

export const loginManager = new LoginManager();
