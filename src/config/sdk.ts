import { AuthControllerApi, UserControllerApi } from "../sdk/auth";
import axios from "axios";
import {
  BusinessCategoryControllerApi,
  MarketControllerApi,
  ShopAdminControllerApi,
  ShopControllerApi,
  ShopProductAdminControllerApi,
  ShopProductControllerApi,
  StateControllerApi,
} from "../sdk/market";
export let authController = new AuthControllerApi();

export let userController = new UserControllerApi();

export let businessCategoryController = new BusinessCategoryControllerApi();

export let marketController = new MarketControllerApi();
export let shopAdminController = new ShopAdminControllerApi();

export let shopProductAdminController = new ShopProductAdminControllerApi();

export let shopController = new ShopControllerApi();
export let shopProductController = new ShopProductControllerApi();
export let stateController = new StateControllerApi();

export function configureClientSDK(token: string) {
  let config = {
    isJsonMime: (mime: any) => {
      return true;
    },
  };
  let axiosConfig = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });

  userController = new UserControllerApi(config, undefined, axiosConfig);

  authController = new AuthControllerApi(config, undefined, axiosConfig);
}
