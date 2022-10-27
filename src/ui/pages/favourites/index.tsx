import { Box, Grid, Group, Paper, Stack, Title } from "@mantine/core";
import { MainProductCard } from "@ui/organisms/product-widgets/MainProductCard";

export default function FavouritesScreen() {
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
                <Title sx={{ fontSize: 24 }}>My Favourites</Title>
              </Box>
            </Group>

            <Grid>
              {[1, 2, 3, 4, 5, 6].map((element) => {
                return (
                  <Grid.Col md={3}>
                    <MainProductCard />
                  </Grid.Col>
                );
              })}
            </Grid>
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}
