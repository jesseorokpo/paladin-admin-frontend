import { AuthApi } from "../sdk/auth";
import {
  LockerApi,
  OrderControllerApi,
  ProductApi,
  TaxonomyApi,
} from "../sdk/catalog";
import { TOKEN } from "./config";

export let authController = new AuthApi();
export let productApiController = new ProductApi();
export let taxonomyApiController = new TaxonomyApi();
export let lockerApiController = new LockerApi();
export let orderControllerApi = new OrderControllerApi();

export function configureClientSDK(token: string) {
  let config = {
    accessToken: token,
    isJsonMime: (mime: any) => {
      return true;
    },
  };

  productApiController = new ProductApi(config);
  taxonomyApiController = new TaxonomyApi(config);
  lockerApiController = new LockerApi(config);
  orderControllerApi = new OrderControllerApi(config);
  authController = new AuthApi(config);

  localStorage.setItem("u-token", token);
}

configureClientSDK(TOKEN);
