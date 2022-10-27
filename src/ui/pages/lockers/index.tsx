import { Box, Grid, Group, Paper, Stack, Title } from "@mantine/core";
import { MainLockerCard } from "@ui/organisms/locker-widgets/MainLockerCard";
import { NewLockerProcess } from "@ui/organisms/processes/new-locker-process";
import { MainProductCard } from "@ui/organisms/product-widgets/MainProductCard";

export default function LockersScreen() {
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
                <Title sx={{ fontSize: 24 }}>Digital Lockers</Title>
              </Box>
              <NewLockerProcess />
            </Group>

            <Grid>
              {[1, 2].map((element) => {
                return (
                  <Grid.Col md={6}>
                    <MainLockerCard />
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
