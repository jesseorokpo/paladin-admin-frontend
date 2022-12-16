import { ActionIcon, Box, Group, Text } from "@mantine/core";
import { RenderPurchases } from "@ui/organisms/renderers/order/RenderPurchases";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
import {
  lockerApiController,
  purchaseControllerApi,
} from "../../../config/sdk";
import { Locker, Purchase } from "../../../sdk/catalog";

export const LockerPurchases = ({ locker }: { locker: Locker }) => {
  let [docs, setDocs] = useState<Purchase[]>([]);

  function load() {
    //@ts-ignore
    purchaseControllerApi
      //@ts-ignore
      .purchaseControllerGetPurchasesLocker(locker._id)
      .then((response) => {
        //@ts-ignore
        setDocs(response.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Box>
      <RenderPurchases items={docs} />
    </Box>
  );
};
