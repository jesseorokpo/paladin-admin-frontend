import { orderManager } from "@store/catalog/order";
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
      dataManager.loadCategories(),
      dataManager.loadProducts(),
    ]).then((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    load();
  }, []);

  return {load}
}
