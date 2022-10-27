import {
  Box,
  Button,
  Group,
  Input,
  Paper,
  Stack,
  Table,
  Title,
  Text,
  ActionIcon,
  Center,
} from "@mantine/core";
import { IconDownload, IconFileDownload } from "@tabler/icons";

export default function OrderHistoryScreen() {
  return (
    <Box style={{ overflow: "hidden !important" }} mt="xl">
      <Stack>
        <InvoicesOverview />
      </Stack>
    </Box>
  );
}

function InvoicesOverview() {
  const rows = [1, 2, 3, 4, 4].map((element) => (
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
            <Title sx={{ fontSize: 24 }}>Order History</Title>
          </Box>
        </Group>

        <Stack
          sx={(theme) => {
            return {
              padding: 12,
            };
          }}
        >
          <Group position="apart" spacing={"xl"}>
            <Box sx={{ flex: 1 }}></Box>
          </Group>

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
        </Stack>
      </Stack>
    </Paper>
  );
}
