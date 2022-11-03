import {
  Box,
  Button,
  Center,
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Table,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../../utils";

export default function LockersScreen() {
  const rows = [1, 2, 3, 4, 4].map((element) => (
    <tr
      key={element}
      style={{
        border: "0px solid black",
        alignItems: "flex-start",
        alignContent: "flex-start",
      }}
    >
      <td>{"#12345"}</td>
      <td>
        <div>{`Joshua Nwafor`}</div>
        <div>{`Owner Id`}</div>
      </td>
      <td>{"LOGISS"}</td>
      <td>{"03-Sep-2022"}</td>
      <td>
        <div>{"(10) Items"}</div>
        <div>{formatCurrency(1000)}</div>
      </td>
      <td>
        <Center>
          <Link to={"/lockers/locker"}>
            <Button variant="outline" size="sm">
              View
            </Button>
          </Link>
        </Center>
      </td>
    </tr>
  ));

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
                  { label: "Blocked", value: "blocked" },
                  { label: "Pending", value: "pending" },
                ]}
              />
            </Group>

            <Table border={0}>
              <thead>
                <tr>
                  <th>PID</th>
                  <th>Profile</th>
                  <th>School</th>
                  <th>Last Used</th>
                  <th>Items</th>
                  <th style={{ textAlign: "center" }}>Active</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
