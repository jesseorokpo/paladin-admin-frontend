import { Box, Group, Input, Paper, Stack, Title } from "@mantine/core";
import { NewProductProcess } from "@ui/organisms/processes/new-product-process";
import { RenderOrders } from "@ui/organisms/renderers/order/RenderOrders";
import { RenderProducts } from "@ui/organisms/renderers/products/RenderProducts";

export default function ProductsScreen() {
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
                <Title sx={{ fontSize: 24 }}>Products</Title>
                <div>Total of 10 items</div>
              </Box>

              <Group>
                <Input />
                <NewProductProcess />
              </Group>
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

              <RenderProducts items={[1, 2, 3, 4, 5]} />
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
