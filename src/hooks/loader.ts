import { orderManager } from "@store/catalog/order";
import { productManager } from "@store/catalog/product";
import {taxonomyManager} from "@store/catalog/taxonomy"
import { dataManager } from "@store/data";
import { payoutManager } from "@store/payout";
import { usersManager } from "@store/users";
import { useEffect } from "react";

export function useUtilsLoader() {
  function load() {
    Promise.all([
      usersManager.loadItems(),
      payoutManager.loadItems(),
      orderManager.loadItems(),
      productManager.loadItems(),
      taxonomyManager.loadItems()
    ]).then((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    load();
  }, []);

  return {load}
}
