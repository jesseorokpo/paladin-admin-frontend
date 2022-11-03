import { Avatar, Box, Button, Center, Table } from "@mantine/core";

export const RenderPayoutRequests = ({ requests }: { requests: any[] }) => {
  const rows = requests.map((element) => (
    <tr key={element} style={{ border: "0px solid black" }}>
      <td>
        <Avatar />
      </td>
      <td>
        <div></div>
        <div></div>
      </td>
      <td>{"(10) Items"}</td>
      <td>{"03-Sep-2022"}</td>
      <td>{"pending"}</td>
      <td>{"N132,000"}</td>
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
            <th>Avatar</th>
            <th>Agents</th>
            <th>Items</th>
            <th>Requested On</th>
            <th>Status</th>
            <th>Amount (N)</th>
            <th style={{ textAlign: "center" }}>Active</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Box>
  );
};
