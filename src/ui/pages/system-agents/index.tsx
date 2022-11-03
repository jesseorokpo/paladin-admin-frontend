import {
  Avatar,
  Box,
  Button,
  Center,
  Group,
  Input,
  Paper,
  SegmentedControl,
  Select,
  Stack,
  Table,
  Title,
} from "@mantine/core";
import { NewUserProcess } from "@ui/organisms/processes/new-user-process";

export default function SystemAgentsScreen() {
  const rows = [1, 2, 3, 4, 4].map((element) => (
    <tr
      key={element}
      style={{
        border: "0px solid black",
      }}
    >
      <td>
        <Avatar />
      </td>
      <td>
        <div>Joshua Nwafor</div>
        <div>joshuanwafor01@gmail</div>
      </td>
      <td>
        <div>{`+2349017283696`}</div>
      </td>
      <td>{"School Name"}</td>
      <td>{"03-Sep-2022"}</td>
      <td>
        <div>{"192.102.100"}</div>
      </td>
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
                <NewUserProcess />
              </Group>
            </Group>
            <Group position="apart">
              <SegmentedControl
                data={[
                  { label: "All Agents", value: "react" },
                  { label: "Active", value: "ng" },
                  { label: "Disabled", value: "svelte" },
                  { label: "Blocked", value: "vue" },
                ]}
              />
              <Select  data={[]} placeholder="Select School" />
            </Group>
            <Table border={0}>
              <thead>
                <tr>
                  <th>Avatar</th>
                  <th>Profile</th>
                  <th>Phone</th>
                  <th>School</th>
                  <th>Last Seen</th>
                  <th>Location</th>
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
