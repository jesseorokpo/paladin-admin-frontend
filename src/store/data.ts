import { CartItem, TProduct } from "@interface/models";
import { makeAutoObservable, runInAction } from "mobx";

class DataManager {
  products: any[] = [];

  categories: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadCategories() {
  
  }

  loadProducts() {
   
  }
}

export const dataManager = new DataManager();
