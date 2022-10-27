import { showNotification } from "@mantine/notifications";
import {
  completeNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";
import { makeAutoObservable, observable } from "mobx";
import { User, AuthControllerApi, RegistrationRequest } from "../../sdk/auth";
import { handleAxiosError } from "../../utils";

class RegisterationManager {
  //@ts-ignore
  user: User;
  constructor() {
    makeAutoObservable(this, { user: observable });
  }

  async createAccount(request: RegistrationRequest) {
    try {
      startNavigationProgress();
      let response = await new AuthControllerApi().userRegistration(request);
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Authentication failed..." });
      completeNavigationProgress();
    }
  }
}

export const registerationManager = new RegisterationManager();
