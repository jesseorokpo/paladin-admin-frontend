import {
  Box,
  Button,
  Group,
  Input,
  Paper,
  Stack,
  Table,
  Title,
} from "@mantine/core";
import { IconDownload, IconFileDownload } from "@tabler/icons";
import { RenderOrders } from "@ui/organisms/renderers/order/RenderOrders";

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

          <RenderOrders items={[1, 2, 3, 34, 4, 5]} />
        </Stack>
      </Stack>
    </Paper>
  );
}
