import { AuthApi } from "../sdk/auth";
import axios from "axios";
import {
  LockerApi,
  OrderControllerApi,
  ProductApi,
  TaxonomyApi,
  PayoutsControllerApi,
  UsersControllerApi,
  PurchaseControllerApi,
} from "../sdk/catalog";

let config = {
  isJsonMime: (mime: any) => {
    return true;
  },
};

let axiosConfig = axios.create({
  headers: {
    "Bypass-Tunnel-Reminder": "bypass",
    "ngrok-skip-browser-warning": "bypass",
  },
});

export let authController = new AuthApi(config, undefined, axiosConfig);
export let productApiController = new ProductApi(
  config,
  undefined,
  axiosConfig
);
export let taxonomyApiController = new TaxonomyApi(
  config,
  undefined,
  axiosConfig
);
export let lockerApiController = new LockerApi(config, undefined, axiosConfig);
export let orderControllerApi = new OrderControllerApi(
  config,
  undefined,
  axiosConfig
);

export let usersControllerApi = new UsersControllerApi(
  config,
  undefined,
  axiosConfig
);

export let payoutsControllerApi = new PayoutsControllerApi(
  config,
  undefined,
  axiosConfig
);

export let purchaseControllerApi = new PurchaseControllerApi(
  config,
  undefined,
  axiosConfig
);
export function configureClientSDK(token: string) {
  let config = {
    accessToken: token,
    isJsonMime: (mime: any) => {
      return true;
    },
  };

  productApiController = new ProductApi(config, undefined, axiosConfig);

  purchaseControllerApi = new PurchaseControllerApi(
    config,
    undefined,
    axiosConfig
  );
  taxonomyApiController = new TaxonomyApi(config, undefined, axiosConfig);
  lockerApiController = new LockerApi(config, undefined, axiosConfig);
  orderControllerApi = new OrderControllerApi(config, undefined, axiosConfig);
  authController = new AuthApi(config, undefined, axiosConfig);

  payoutsControllerApi = new PayoutsControllerApi(
    config,
    undefined,
    axiosConfig
  );
  usersControllerApi = new UsersControllerApi(config, undefined, axiosConfig);

  localStorage.setItem("u-token", token);
}
