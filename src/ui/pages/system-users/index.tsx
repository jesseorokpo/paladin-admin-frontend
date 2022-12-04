import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Group,
  Input,
  Paper,
  Stack,
  Table,
  Title,
} from "@mantine/core";
import { productManager } from "@store/catalog/product";
import { NewUserProcess } from "@ui/organisms/processes/new-user-process";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";

export default function SystemUsersScreen() {
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
                <Title sx={{ fontSize: 24 }}>System users (19)</Title>
              </Box>
              <Group>
                <Input radius={"xl"} placeholder="Search Customer" />
                <NewUserProcess />
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
              records={[]}
              withBorder={false}
              rowExpansion={{
                allowMultiple: true,
                content: (props) => {
                  return (
                    <Box p="md">
                      <Box px="12px" sx={{ background: "ghostwhite" }}>
                        {/* <Expand product={props.record} /> */}
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
                  title: "Fullname",
                },
                {
                  accessor: "phone",
                  title: "Phone",
                },
                {
                  accessor: "email",
                  title: "Email",
                },
                {
                  accessor: "status",
                  title: "Active",
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
}
