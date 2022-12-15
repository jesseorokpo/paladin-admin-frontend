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
  SegmentedControl,
  Select,
  Stack,
  Table,
  Title,
} from "@mantine/core";
import { productManager } from "@store/catalog/product";
import { usersManager } from "@store/users";
import { NewAgentProcess } from "@ui/organisms/processes/new-agent-process";
import { NewUserProcess } from "@ui/organisms/processes/new-user-process";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

export default observer(function SystemAgentsScreen() {
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
                <Title sx={{ fontSize: 24 }}>System Agents (19)</Title>
              </Box>
              <Group>
                <Input radius={"xl"} placeholder="Search Customer" />
                <NewAgentProcess />
              </Group>
            </Group>
            <Group position="apart">
              <SegmentedControl
                data={[
                  { label: "All Agents", value: "react" },
                  { label: "Active", value: "ng" },
                  { label: "Blocked", value: "vue" },
                ]}
              />
              <Select data={[]} placeholder="Select School" />
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
              records={usersManager.agents}
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
