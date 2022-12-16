import {
  ActionIcon,
  Box,
  Grid,
  Group,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { Order, Purchase } from "../../../../sdk/catalog";
import { formatCurrency } from "../../../../utils";

export const RenderPurchases = ({ items }: { items: Purchase[] }) => {
  return (
    <Box>
      <DataTable
        height={500}
        striped={false}
        withColumnBorders
        style={{ background: "ghostwhite", paddingTop: 0 }}
        verticalSpacing="md"
        noRecordsIcon={true}
        borderRadius="xs"
        records={items}
        withBorder={false}
        rowExpansion={{
          allowMultiple: false,
          content: (props) => {
            let data = props.record;
            return (
              <Box p="md" key={props.recordIndex}>
                <Box p="md" sx={{ background: "ghostwhite" }}>
                  <Stack>
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
                          value={`${new Date(data.updated_at).toDateString()}`}
                        />
                      </Grid.Col>
                      <Grid.Col md={4}>
                        <VerticalKeyValuePair
                          label="Update At"
                          value={`${new Date(data.created_at).toDateString()}`}
                        />
                      </Grid.Col>
                    </Grid>
                    <Box>
                      <Text color="gray">Items</Text>
                      {props.record.items.map((element) => {
                        return (
                          <Text>
                            {element.product_name} X {element.quantity}{" "}
                          </Text>
                        );
                      })}
                    </Box>
                  </Stack>
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
                <Box sx={{ width: 10, height: 10, background: "gray" }}></Box>
              </Group>
            ),
          },
          {
            accessor: "name",
            title: "Items Collected",
            render: ({ items }) => {
              return (
                <Text>
                  {items[0].product_name} and {items.length - 1} more
                </Text>
              );
            },
          },
          {
            accessor: "sum_total",
            title: "Total",
            render: ({
              //@ts-ignore
              sum_total,
            }) => {
              return <Text>{formatCurrency(sum_total)}</Text>;
            },
          },
          {
            accessor: "status",
            title: "Status",
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
    </Box>
  );
};
