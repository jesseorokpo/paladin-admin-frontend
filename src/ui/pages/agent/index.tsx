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
import { AgentDetails } from "./AgentDetails";
import { AgentTransactions } from "./AgentTransactions";
import { AgentPayouts } from "./AgentPayouts";

export default function AgentScreen() {
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
                <Title sx={{ fontSize: 24 }}>Agent Account</Title>
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
                <Tabs.Tab value="transactions">Transactions</Tabs.Tab>
                <Tabs.Tab value="payouts">Payouts</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="profile" pt="xs">
                <AgentDetails />
              </Tabs.Panel>

              <Tabs.Panel value="transactions" pt="xs">
                <AgentTransactions />
              </Tabs.Panel>
              <Tabs.Panel value="payouts" pt="xs">
                <AgentPayouts />
              </Tabs.Panel>

              <Tabs.Panel value="payouts" pt="xs">
                <AgentPayouts />
              </Tabs.Panel>
            </Tabs>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
