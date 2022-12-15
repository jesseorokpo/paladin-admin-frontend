import {
  ActionIcon,
  Box,
  Divider,
  Group,
  Paper,
  Stack,
  Title,
} from "@mantine/core";
import { orderManager } from "@store/catalog/order";
import { RenderOrders } from "@ui/organisms/renderers/order/RenderOrders";
import { ArrowDown2 } from "iconsax-react";
import { DataTable } from "mantine-datatable";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { Expand } from "../store/products/Expand";

export default observer(function OrderHistoryScreen() {
  useEffect(() => {
    orderManager.loadItems();
  }, []);

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
                <Title sx={{ fontSize: 24 }}>Order History</Title>
              </Box>
            </Group>

            <Divider />

            <RenderOrders items={orderManager.items} />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
});
