import {
  ActionIcon,
  Avatar,
  Box,

  Group,
  Paper,
  SegmentedControl,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";

export default function PayoutsScreen() {
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
                <Title sx={{ fontSize: 24 }}>Payouts</Title>
              </Box>
            </Group>

            <Stack
              sx={(theme) => {
                return {
                  padding: 12,
                  background: "white",
                };
              }}
            >
              <Group>
                <SegmentedControl
                  data={[
                    { label: "All Requests", value: "all" },
                    { label: "Pending", value: "pending" },
                    { label: "Completed", value: "completed" },
                    { label: "Processing", value: "processing" },
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
                // records={payoutManager.items}
                rowExpansion={{
                  allowMultiple: true,
                  content: (props) => {
                    let data = props.record;
                    return (
                      <Box p="md" key={props.recordIndex}>
                        <Box p="md" sx={{ background: "ghostwhite" }}></Box>
                      </Box>
                    );
                  },
                }}
                records={[{}, {}]}
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
                    accessor: "agent",
                    title: "Agent",
                  },
                  {
                    accessor: "items",
                    title: "Item Summary",
                  },
                  {
                    accessor: "items",
                    title: "Total Amount",
                  },
                  {
                    accessor: "*",
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
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
