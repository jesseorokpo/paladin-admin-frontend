import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Table,
  Title,
  Text,
  Avatar,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils";
import { DataTable } from "mantine-datatable";
import { orderManager } from "@store/catalog/order";
import { ArrowDown2 } from "iconsax-react";
import { lockerManager } from "@store/locker";
import { useEffect } from "react";
import { observer } from "mobx-react";

export default observer(function LockersScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    lockerManager.loadItems();
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
                <Title sx={{ fontSize: 24 }}>Digital Lockers</Title>
              </Box>
              <SegmentedControl
                data={[
                  { label: "All Lockers", value: "all" },
                  { label: "Active", value: "active" },
                ]}
              />
            </Group>

            <DataTable
              height={500}
              striped={false}
              withColumnBorders
              style={{ background: "ghostwhite", paddingTop: 0 }}
              verticalSpacing="md"
              noRecordsIcon={true}
              borderRadius="xs"
              records={lockerManager.items}
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
                  accessor: "photo",
                  title: "Photo",
                  width: 100,
                  render: () => {
                    return <Avatar size={"lg"} />;
                  },
                },
                {
                  accessor: "pid",
                  title: "PID",
                },
                {
                  accessor: "fullname",
                  title: "Profile",
                  render: (props) => {
                    console.log(props);
                    return (
                      <Text>
                        {props.first_name} {props.last_name}
                      </Text>
                    );
                  },
                },
                {
                  accessor: "status",
                  title: "Status",
                },
                {
                  accessor: "*",
                  title: "Action",
                  width: 100,
                  render: (props) => {
                    return (
                      <Button
                        variant="subtle"
                        onClick={() => {
                          console.log(props);
                          //@ts-ignore
                          navigate(`/lockers/${props?._id}`);
                        }}
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
