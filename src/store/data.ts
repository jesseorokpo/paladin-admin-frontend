import { CartItem, TProduct } from "@interface/models";
import { makeAutoObservable, runInAction } from "mobx";

class DataManager {
  products: any[] = [];

  categories: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadCategories() {
    fetch("https://dummyjson.com/products/categories")
      .then(async (res) => {
        let data = await res.json();
        console.log(data);
        runInAction(() => {
          this.categories = data;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  loadProducts() {
    fetch("https://dummyjson.com/products")
      .then(async (res) => {
        let data = await res.json();
        console.log(data);
        runInAction(() => {
          this.products = data.products;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export const dataManager = new DataManager();
