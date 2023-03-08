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
  Text,
} from "@mantine/core";
import { productManager } from "@store/catalog/product";
import { usersManager } from "@store/users";
import { NewAgentProcess } from "@ui/organisms/processes/new-agent-process";

import { DataTable } from "mantine-datatable";
import { observer } from "mobx-react";
import { Link, useNavigate } from "react-router-dom";

export default observer(function SystemAgentsScreen() {
  const navigate = useNavigate();
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
                <Title sx={{ fontSize: 24 }}>System Agents</Title>
              </Box>
              <Group>
                <Input radius={"xl"} placeholder="Search Customer" />
                <NewAgentProcess />
              </Group>
            </Group>
        
         
            <DataTable
             
              striped={false}
              withColumnBorders
              style={{ background: "ghostwhite", paddingTop: 0 }}
              verticalSpacing="xs"
              noRecordsIcon={true}
              borderRadius="xs"
              records={usersManager.agents}
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
                {
                  accessor: "d",
                  title: "Action",
                  width: 100,
                  render: (props) => {
                    return (
                      <Button
                        variant="subtle"
                        onClick={
                          //@ts-ignore
                          () => {
                            console.log(props);
                            //@ts-ignore
                            navigate(`/agents/${props?._id}`);
                          }
                        }
                      >
                        View
                      </Button>
                    );
                  },
                },
              ]}
            />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
});
