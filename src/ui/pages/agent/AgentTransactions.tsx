import { Box, Button, Grid, Group, Tabs } from "@mantine/core";
import {
  HorizontalKeyValuePair,
  VerticalKeyValuePair,
} from "@ui/molecules/text";
import { AssetCard } from "@ui/organisms/locker-widgets/AssetCard";
import { MainLockerCard } from "@ui/organisms/locker-widgets/MainLockerCard";

export const AgentTransactions = () => {
  return (
    <Box>
      <Grid
        align={"center"}
        mt={"12px"}
        sx={(theme) => {
          return {
            background: "#ede0d4",
            borderRadius: 4,
          };
        }}
      >
        <Grid.Col md={3}>
          <VerticalKeyValuePair label="Period" value="100" />
        </Grid.Col>
        <Grid.Col md={3}>
          <VerticalKeyValuePair label="Total Transactions" value="100" />
        </Grid.Col>
        <Grid.Col md={3}>
          <VerticalKeyValuePair label="Transactions Sum" value="N100,000" />
        </Grid.Col>
        <Grid.Col md={3}>
          <Group position="right">
            <Button>Request Pay</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
