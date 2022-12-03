import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Group,
  Input,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { productManager } from "@store/catalog/product";
import { NewProductProcess } from "@ui/organisms/processes/new-product-process";
import { ArrowDown2 } from "iconsax-react";
import { observer } from "mobx-react";
import { DataTable } from "mantine-datatable";
import { useEffect } from "react";
import { Expand } from "./Expand";

export default observer(function ProductsScreen() {
  useEffect(() => {
    productManager.loadItems();
  }, []);
  return (
    <Box style={{ overflow: "hidden !important" }} mt="xl">
      <Stack>
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
                <Title sx={{ fontSize: 24 }}>Products</Title>
                <div>Total of 10 items</div>
              </Box>

              <Group>
                <Input />
                <NewProductProcess />
              </Group>
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
              records={productManager.items}
              withBorder={false}
              rowExpansion={{
                allowMultiple: true,
                content: (props) => {
                  return (
                    <Box p="md">
                      <Box px="12px" sx={{ background: "ghostwhite" }}>
                        <Expand product={props.record}/>
                      </Box>
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
                      <Box
                        sx={{ width: 10, height: 10, background: "gray" }}
                      ></Box>
                    </Group>
                  ),
                },
                {
                  accessor: "image",
                  title: "Image",
                  render: ({ image }) => <Avatar src={image ?? ""} />,
                },
                {
                  accessor: "name",
                  title: "Name",
                },
                {
                  accessor: "price",
                  title: "Price",
                },
                {
                  accessor: "status",
                  title: "Status",
                },
                {
                  accessor: "body",
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
      </Stack>
    </Box>
  );
});
