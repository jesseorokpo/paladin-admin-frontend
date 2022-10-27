import { showNotification } from "@mantine/notifications";
import { makeAutoObservable, observable } from "mobx";
import {
  User,
  AuthControllerApi,
  LoginRequest,
  SocialRequestPlatformEnum,
} from "../../sdk/auth";
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

  async login(request: LoginRequest) {
    try {
      startNavigationProgress();
      let response = await new AuthControllerApi().login(request);
      console.log(response.data);
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Authentication failed..." });
      completeNavigationProgress();
    }
  }
  async loginFacebook(platform: SocialRequestPlatformEnum) {
    try {
      startNavigationProgress();
      let response = await new AuthControllerApi().loginFacebook({
        platform: platform,
        accessToken: "",
      });
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Authentication failed..." });
      completeNavigationProgress();
    }
  }

  async loginGoogle(platform: SocialRequestPlatformEnum) {
    try {
      startNavigationProgress();
      let response = await new AuthControllerApi().loginGoogle({
        platform: platform,
        accessToken: "",
      });
      completeNavigationProgress();
    } catch (err) {
      let message = handleAxiosError(err);
      showNotification({ message: "Authentication failed..." });
      completeNavigationProgress();
    }
  }
}

export const loginManager = new LoginManager();
