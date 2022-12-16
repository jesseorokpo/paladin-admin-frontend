import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { usersManager } from "@store/users";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Expand } from "../store/products/Expand";

export default observer(function CustomersScreen() {
  useEffect(() => {
  
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
                <Title sx={{ fontSize: 24 }}>Customers</Title>
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
              records={usersManager.individuals}
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
                  render: ({ photo }) => <Avatar src={photo ?? ""} />,
                },
                {
                  accessor: "name",
                  title: "Fullname",
                  render: ({ first_name, last_name }) => {
                    return (
                      <Text>
                        {first_name} {last_name}
                      </Text>
                    );
                  },
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
});
