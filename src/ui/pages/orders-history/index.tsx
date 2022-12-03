import {
  ActionIcon,
  Box,
  Divider,
  Group,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { orderManager } from "@store/catalog/order";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { Expand } from "../store/products/Expand";

export default function OrderHistoryScreen() {
  return (
    <Box style={{ overflow: "hidden !important" }} mt="xl">
      <Stack>
        <InvoicesOverview />
      </Stack>
    </Box>
  );
}

function InvoicesOverview() {
  return (
    <Paper
      p={"18px"}
      sx={(theme) => {
        return { width: "100%", background: "white" };
      }}
      shadow="md"
    >
      <Stack>
        <Group position="apart">
          <Box>
            <Title sx={{ fontSize: 24 }}>Order History</Title>
          </Box>
        </Group>

        <Divider />

        <DataTable
          height={500}
          striped={false}
          withColumnBorders
          style={{ background: "ghostwhite", paddingTop: 0 }}
          verticalSpacing="md"
          noRecordsIcon={true}
          borderRadius="xs"
          records={orderManager.items}
          withBorder={false}
          rowExpansion={{
            allowMultiple: true,
            content: (props) => {
              return (
                <Box p="md">
                  <Box px="12px" sx={{ background: "ghostwhite" }}></Box>
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
              accessor: "name",
              title: "Name",
            },
            {
              accessor: "price",
              title: "Total",
            },
            {
              accessor: "status",
              title: "Status",
            },
            {
              accessor: "items",
              title: "Description",
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
      </Stack>
    </Paper>
  );
}
