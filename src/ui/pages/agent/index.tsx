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

            <AgentDetails />

            
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
