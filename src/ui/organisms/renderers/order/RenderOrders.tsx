import { Box, Button, Center, Table } from "@mantine/core";

export const RenderOrders = ({ items }: { items: any[] }) => {
  const rows = items.map((element) => (
    <tr key={element} style={{ border: "0px solid black" }}>
      <td>{"449012246AD"}</td>
      <td>{"#1234"}</td>
      <td>{"03-Sep-2022"}</td>
      <td>{"132,000"}</td>
      <td>
        <Center>
          <Button variant="outline" size="sm">
            View
          </Button>
        </Center>
      </td>
    </tr>
  ));

  return (
    <Box>
      <Table border={0}>
        <thead>
          <tr>
            <th>Invoice ID</th>
            <th>Locker ID</th>
            <th>Payment Date</th>
            <th>Amount (N)</th>
            <th style={{ textAlign: "center" }}>Active</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
