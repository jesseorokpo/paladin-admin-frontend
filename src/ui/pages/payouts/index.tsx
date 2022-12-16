import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Grid,
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Title,
} from "@mantine/core";
import { payoutManager } from "@store/payout";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { payoutsControllerApi } from "../../../config/sdk";

export default observer(function PayoutsScreen() {
  useEffect(() => {
    payoutManager.loadItems();
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
                records={payoutManager.items}
                rowExpansion={{
                  allowMultiple: true,
                  content: (props) => {
                    let data = props.record;
                    return (
                      <Box p="md" key={props.recordIndex}>
                        <Box p="md" sx={{ background: "ghostwhite" }}>
                          <Grid>
                            <Grid.Col md={4}>
                              <VerticalKeyValuePair
                                label="Status"
                                value={`${data.status}`}
                              />
                            </Grid.Col>
                            <Grid.Col md={4}>
                              <VerticalKeyValuePair
                                label="Created At"
                                value={`${new Date(
                                  data.updated_at
                                ).toDateString()}`}
                              />
                            </Grid.Col>
                            <Grid.Col md={4}>
                              <VerticalKeyValuePair
                                label="Update At"
                                value={`${new Date(
                                  data.created_at
                                ).toDateString()}`}
                              />
                            </Grid.Col>
                          </Grid>

                          <Group position="right">
                            {data.status == "pending" ? (
                              <Button
                                onClick={async () => {
                                  //@ts-ignore
                                  await payoutsControllerApi.payoutControllerClearPayout(
                                    //@ts-ignore
                                    data._id
                                  );
                                  payoutManager.loadItems();
                                }}
                              >
                                Clear Payout
                              </Button>
                            ) : null}
                          </Group>
                        </Box>
                      </Box>
                    );
                  },
                }}
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
                    title: "Agent Profile",
                    width: 200,
                    render: () => {
                      return <Avatar size={"lg"} />;
                    },
                  },
                  {
                    accessor: "notes",
                    title: "Notes",
                  },
                  {
                    accessor: "sum_total",
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
});
