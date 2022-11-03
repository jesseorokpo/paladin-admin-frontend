import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
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
              caption="this month"
              color="orange"
              icon={<Document variant="Bold" color="gray" />}
              value="0"
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Categories"
              caption="this month"
              color="orange"
              icon={<LockCircle variant="Bold" color="gray" />}
              value="0"
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Orders"
              caption="this month"
              color="orange"
              icon={<Card variant="Bold" color="gray" />}
              value="0"
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Outstanding"
              caption="this month"
              color="orange"
              icon={<Card variant="Bold" color="gray" />}
              value="0"
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
}
