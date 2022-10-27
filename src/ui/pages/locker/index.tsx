import {
  Box,
  Group,
  Paper,
  Stack,
  Title,
  Text,
  Tabs,
  ActionIcon,
} from "@mantine/core";
import { CardEdit, Edit, EyeSlash } from "iconsax-react";
import { LockerAssets } from "./LockerAssets";
import { LockerDetails } from "./LockerDetails";
import { LockerHistory } from "./LockerHistory";

export default function LockerScreen() {
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
                <Title sx={{ fontSize: 24 }}>Locker</Title>
                <Text>#123456</Text>
              </Box>

              <Group>
                <ActionIcon>
                  <EyeSlash />
                </ActionIcon>
                <ActionIcon>
                  <CardEdit />
                </ActionIcon>
              </Group>
            </Group>

            <Tabs defaultValue="profile" variant="pills">
              <Tabs.List>
                <Tabs.Tab value="profile">Details</Tabs.Tab>
                <Tabs.Tab value="items">Assets (0)</Tabs.Tab>
                <Tabs.Tab value="history">Use History</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="profile" pt="xs">
                <LockerDetails />
              </Tabs.Panel>

              <Tabs.Panel value="items" pt="xs">
                <LockerAssets />
              </Tabs.Panel>

              <Tabs.Panel value="history" pt="xs">
                <LockerHistory />
              </Tabs.Panel>
            </Tabs>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
