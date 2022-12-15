import {
  Avatar,
  Box,
  Divider,
  Group,
  Input,
  Paper,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { usersManager } from "@store/users";
import { NewAdminProcess } from "@ui/organisms/processes/new-admin-process";
import { DataTable } from "mantine-datatable";
import { observer } from "mobx-react";

export default observer(function SystemUsersScreen() {
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
                <Title sx={{ fontSize: 24 }}>System users</Title>
              </Box>
              <Group>
                <Input radius={"xl"} placeholder="Search Customer" />
                <NewAdminProcess />
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
              records={usersManager.admins}
              withBorder={false}
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
              ]}
            />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
});
