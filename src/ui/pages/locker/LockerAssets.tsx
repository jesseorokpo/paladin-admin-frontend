import { ActionIcon, Box, Grid, Group } from "@mantine/core";
import { Locker, OrderItem } from "../../../sdk/catalog";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";

export const LockerAssets = ({ locker }: { locker: Locker }) => {
  let [docs, setDocs] = useState<OrderItem[]>([]);
  //@ts-ignore
  const LOCKER_PATH = `locker/${locker._id}`;
  const shelfCollection = collection(getFirestore(), `${LOCKER_PATH}/shelf`);

  function load() {
    getDocs(shelfCollection)
      .then((response) => {
        //@ts-ignore
        setDocs(response.docs.map((e) => e.data()));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Box>
      <DataTable
        height={500}
        striped={false}
        withColumnBorders
        style={{ background: "ghostwhite", paddingTop: 0 }}
        verticalSpacing="md"
        noRecordsIcon={true}
        borderRadius="xs"
        records={docs}
        withBorder={false}
        rowExpansion={{
          allowMultiple: false,
          content: (props) => {
            let data = props.record;
            return (
              <Box p="md" key={props.recordIndex}>
                <Box p="md" sx={{ background: "ghostwhite" }}></Box>
              </Box>
            );
          },
        }}
        columns={[
          {
            accessor: "id",
            title: "#",
            textAlignment: "center",
            width: 50,
            render: ({}) => (
              <Group position="center">
                <Box sx={{ width: 10, height: 10, background: "gray" }}></Box>
              </Group>
            ),
          },
          {
            accessor: "product_name",
            title: "Product Name",
          },
          {
            accessor: "quantity",
            title: "Quantitiy",
          },
          {
            accessor: "amount",
            title: "Cost (Per)",
          },      
        ]}
      />
    </Box>
  );
};
