import { dataManager } from "@store/data";
import { useEffect } from "react";

export function useUtilsLoader() {
  function load() {
    Promise.all([
      dataManager.loadCategories(),
      dataManager.loadProducts(),
    ]).then((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    load();
  }, []);
}
