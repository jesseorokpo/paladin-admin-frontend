import {
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { orderManager } from "@store/catalog/order";
import { productManager } from "@store/catalog/product";
import { taxonomyManager } from "@store/catalog/taxonomy";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { MainStatsCard } from "@ui/organisms/dashboard-widgets";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import ProductCard from "@ui/organisms/product-widgets/ProductCard";
import { Card, Document, LockCircle } from "iconsax-react";

export const StoreDashboardScreen = () => {
  let theme = useMantineTheme();
  return (
    <Stack spacing={"xl"} justify="stretch" mt={"xl"}>
      <AccountOverview />
    </Stack>
  );
};

function AccountOverview() {
  return (
    <Paper
      p={"18px"}
      sx={(theme) => {
        return { width: "100%", background: "white" };
      }}
      shadow="md"
    >
      <Stack>
        <SectionHeader title="Account Activities" showBorder={false} />
        <Grid>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Products"
              caption="at this moment"
              color="orange"
              icon={<Document variant="Bold" color="gray" />}
              value={productManager.items.length + ""}
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Categories"
              caption="at this moment"
              color="orange"
              icon={<LockCircle variant="Bold" color="gray" />}
              value={taxonomyManager.items.length + ""}
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Orders"
              caption="at this moment"
              color="orange"
              icon={<Card variant="Bold" color="gray" />}
              value={orderManager.items.length + ""}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
}
