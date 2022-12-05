import { CartItem, TProduct } from "@interface/models";
import { showNotification } from "@mantine/notifications";
import { makeObservable, observable, runInAction } from "mobx";

class CartManager {
  items: CartItem[];

  constructor() {
    this.items = [];
    makeObservable(this, {
      items: observable,
    });
  }

  addItemQuantity = (item: CartItem, num: number) => {
    let changed = { ...item };
    changed.quantity = changed.quantity + num;
    runInAction(() => {
      let itemIndex = this.items.findIndex(
        (v) => v.product_id !== item.product_id
      );
      let tempL = [...this.items];
      tempL[itemIndex].quantity= changed.quantity;
      this.items = tempL;
    });
  };

  addItem = (product: TProduct) => {
    if (this.items.find((e) => e.product_id == product.id)) {
      showNotification({
        message: `${product.title}  already exists in shopping cart...`,
      });
      return;
    }
    runInAction(() => {
      this.items.push({
        name: product.title ?? "",
        price: product.price ?? 0,
        product_id: product.id ?? "",
        quantity: 1,
        image: product.thumbnail,
      });
      this.items = [...this.items];
    });

    showNotification({
      message: `${product.title} was added to your cart 👍... `,
    });
  };

  removeItem = (item: CartItem) => {
    runInAction(() => {
      let newList = this.items.filter((v) => v.product_id !== item.product_id);
      this.items = [...newList];
    });
  };
  removeItemById = (item: string) => {
    runInAction(() => {
      let newList = this.items.filter((v) => v.product_id !== item);
      this.items = [...newList];
    });
  };

  clear = () => {
    runInAction(() => {
      this.items = [];
    });
  };
}

export const cartManager = new CartManager();
