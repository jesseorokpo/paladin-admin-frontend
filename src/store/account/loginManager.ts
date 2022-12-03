import { showNotification } from "@mantine/notifications";
import { makeAutoObservable, observable } from "mobx";
import { AuthApi, LoginDto } from "../../sdk/auth";
import { AxiosError } from "axios";
import {
  startNavigationProgress,
  completeNavigationProgress,
} from "@mantine/nprogress";
import { handleAxiosError } from "../../utils";

class LoginManager {
  //@ts-ignore
  user: User;
  constructor() {
    makeAutoObservable(this, { user: observable });
  }

  async login(request: LoginDto) {
    try {
      startNavigationProgress();
      let response = await new AuthApi().authControllerLogin(request);
      console.log(response.data);
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Authentication failed..." });
      completeNavigationProgress();
    }
  }
}

export const loginManager = new LoginManager();
