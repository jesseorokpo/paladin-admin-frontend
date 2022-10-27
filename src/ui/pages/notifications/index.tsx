import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Group,
  Input,
  Paper,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";

export default function NotificationsScreen() {
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
                <Title sx={{ fontSize: 24 }}>My Notifications</Title>
              </Box>
            </Group>

            <Stack
              sx={(theme) => {
                return {
                  padding: 12,
                  background: "white",
                };
              }}
            ></Stack>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
