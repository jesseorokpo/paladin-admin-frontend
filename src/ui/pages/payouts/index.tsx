import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Group,
  Input,
  Paper,
  SegmentedControl,
  Stack,
  Table,
  Text,
  Title,
} from "@mantine/core";
import { RenderPayoutRequests } from "@ui/organisms/renderers/payout-requests/RenderPayoutRequests";

export default function PayoutsScreen() {
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
                <Title sx={{ fontSize: 24 }}>Payouts</Title>
              </Box>
            </Group>

            <Stack
              sx={(theme) => {
                return {
                  padding: 12,
                  background: "white",
                };
              }}
            >
              <Group>
                <SegmentedControl
                  data={[
                    { label: "All Requests", value: "all" },
                    { label: "Pending", value: "pending" },
                    { label: "Completed", value: "completed" },
                    { label: "Processing", value: "processing" },
                  ]}
                />
              </Group>

              <RenderPayoutRequests requests={[1, 2, 3, 4, 1, 2, 3, 4]} />
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
