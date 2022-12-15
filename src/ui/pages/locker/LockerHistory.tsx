import { ActionIcon, Box, Group, Text } from "@mantine/core";
import { collection, getDocs, getFirestore, } from "firebase/firestore";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { useEffect, useState } from "react";
import { Locker, OrderItem } from "../../../sdk/catalog";

export const LockerHistory = ({ locker }: { locker: Locker }) => {
  let [docs, setDocs] = useState<OrderItem[]>([]);
  //@ts-ignore
  const LOCKER_PATH = `locker/${locker._id}`;
  const shelfCollection = collection(
    getFirestore(),
    `${LOCKER_PATH}/inventory`
  );

  function load() {
    getDocs(shelfCollection)
      .then((response:any) => {
        //@ts-ignore
        setDocs(response.docs.map((e) => e.data()));
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
            accessor: "action",
            title: "Activity",
          },
          {
            accessor: "context",
            title: "Context",
          },
          {
            accessor: "when",
            title: "Timestamp",
            render: ({
              //@ts-ignore
              when
            }) => <Text>{new Date(when).toDateString()}</Text>,
          },
          {
            accessor: "d",
            title: "Action",
            width: 100,
            render: ({}) => (
              <Group>
                <ActionIcon>
                  <ArrowDown2 variant="Bold" />
                </ActionIcon>
              </Group>
            ),
          },
        ]}
      />
    </Box>
  );
};
