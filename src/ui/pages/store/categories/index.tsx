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
import { taxonomyManager } from "@store/catalog/taxonomy";
import { NewCategoryProcess } from "@ui/organisms/processes/new-category-process";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Expand } from "./Expand";

export default observer(function CategoriesScreen() {
  useEffect(() => {
    taxonomyManager.loadItems();
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
                <Title sx={{ fontSize: 24 }}>Categories</Title>
                <div>Total of 10 items</div>
              </Box>

              <Group>
                <Input />
                <NewCategoryProcess />
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
              records={taxonomyManager.items.slice()}
              withBorder={false}
              rowExpansion={{
                allowMultiple: true,
                content: (props) => {
                  return (
                    <Box p="md">
                      <Box px="12px" sx={{ background: "ghostwhite" }}>
                        <Expand taxonomy={props.record} />
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
                  accessor: "type",
                  title: "Type",
                },
                {
                  accessor: "description",
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
