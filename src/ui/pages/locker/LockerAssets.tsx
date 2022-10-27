import { Box, Grid } from "@mantine/core";
import { AssetCard } from "@ui/organisms/locker-widgets/AssetCard";
import { MainLockerCard } from "@ui/organisms/locker-widgets/MainLockerCard";

export const LockerAssets = () => {
  return (
    <Box>
      <Grid>
        {[1, 2, 2, 3, 4, 5, 6].map((element) => {
          return (
            <Grid.Col md={6}>
              <AssetCard />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};
