import { runInAction } from "mobx";
import { productApiController } from "../../config/sdk";
import {
  Product,
  PublishProductDto,
  PublishProductDtoTypeEnum,
  UpdateProductDto,
} from "../../sdk/catalog";

class Manager {
  items: Product[] = [];
  constructor() {}

  loadItems() {
    productApiController.productControllerGet().then((payload) => {
      runInAction(() => {
        this.items = payload.data;
      });
    });
  }

  deleteItem(id: string) {
    console.log("deleting item")
    productApiController.productControllerDeleteItem(id).then((payload) => {
      runInAction(() => {
        // @ts-ignore
        this.items = this.items.filter((element) => element._id != id);
        this.loadItems()
      });
    });
  }

  updateItem(id: string, payload: UpdateProductDto) {
    productApiController
      .productControllerUpdate(id, payload)
      .then((payload) => {
        runInAction(() => {
          // @ts-ignore
          const index = this.items.findIndex((element) => element._id == id);
          this.items[index] = { ...payload, ...this.items[index] };
        });
      });
  }

  publishItem(payload: PublishProductDto) {
    payload.type = PublishProductDtoTypeEnum.Digital;
    productApiController
      .productControllerPublish(payload)
      .then((payload) => {
        runInAction(() => {
          this.items.push(payload.data);
        });
      })
      .catch((err) => {
        //@ts-ignore
        console.log(err.response);
      });
  }
}

export const productManager = new Manager();
