import { makeAutoObservable, runInAction } from "mobx";
import { productApiController } from "../../config/sdk";
import {AxiosError} from "axios"
import {
  Product,
  PublishProductDto,
  PublishProductDtoTypeEnum,
  UpdateProductDto,
} from "../../sdk/catalog";

class Manager {
  items: Product[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  loadItems() {
    productApiController
      .productControllerGet()
      .then((payload) => {
        console.log(payload);
        runInAction(() => {
          this.items = payload.data ?? [];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteItem(id: string) {
    console.log("deleting item");
    productApiController.productControllerDeleteItem(id).then((payload) => {
      runInAction(() => {
        // @ts-ignore
        this.items = this.items.filter((element) => element._id != id);
        this.loadItems();
      });
    });
  }

  updateItem(id: string, payload: UpdateProductDto) {
    console.log(id)
    productApiController
      .productControllerUpdate(id, payload)
      .then((payload) => {
          console.log(payload)
        runInAction(() => {
          // @ts-ignore
          const index = this.items.findIndex((element) => element._id == id);
          this.items[index] =payload.data;
          this.items=[...this.items]
        });
      }).catch(e=>{
        let err:AxiosError= e as AxiosError;
        console.log(err.response)
      });
  }

  async publishItem(payload: PublishProductDto) {
    payload.type = PublishProductDtoTypeEnum.Digital;
    try {
      let response = await productApiController.productControllerPublish(
        payload
      );
      runInAction(() => {
        this.items.push(response.data);
        this.items = [...this.items];
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export const productManager = new Manager();
