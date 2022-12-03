import { runInAction } from "mobx";
import { productApiController, taxonomyApiController } from "../../config/sdk";
import {
  Product,
  PublishProductDto,
  PublishProductDtoTypeEnum,
  PublishTaxonomyDto,
  Taxonomy,
  UpdateProductDto,
  UpdateTaxonomyDto,
} from "../../sdk/catalog";

class Manager {
  items: Taxonomy[] = [];
  constructor() {}

  loadItems() {
    taxonomyApiController.taxonomyControllerGet().then((payload) => {
      runInAction(() => {
        this.items = payload.data??[];
      });
    });
  }

  deleteItem(id: string) {
    taxonomyApiController.taxonomyControllerDeleteItem(id).then((payload) => {
      runInAction(() => {
        // @ts-ignore
        this.items = this.items.filter((element) => element._id != id);
        this.loadItems();
      });
    });
  }

  updateItem(id: string, payload: UpdateTaxonomyDto) {
    taxonomyApiController
      .taxonomyControllerUpdate(id, payload)
      .then((payload) => {
        runInAction(() => {
          // @ts-ignore
          const index = this.items.findIndex((element) => element._id == id);
          this.items[index] = { ...payload, ...this.items[index] };
        });
      });
  }

  publishItem(payload: PublishTaxonomyDto) {
    taxonomyApiController
      .taxonomyControllerPublish(payload)
      .then((payload) => {
        console.log(payload);
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

export const taxonomyManager = new Manager();
