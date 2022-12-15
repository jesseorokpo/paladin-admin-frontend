import { Avatar, Box, Button, Grid, Group, Stack } from "@mantine/core";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import { Locker } from "../../../sdk/catalog";

export const LockerDetails = ({ locker }: { locker: Locker }) => {
  return (
    <Box my="md">
      <Box>
        <SectionHeader title="Student Profile" showBorder={false} />
        <Stack mt="md">
          <Group position="apart">
            <Avatar
              size={"xl"}
              src="https://business.appstate.edu/sites/default/files/styles/asu_news_full/public/asu_news/student-profile-javon-nathaniel.jpg?itok=-KyYkUKf"
            />
            <Stack>
              <Button variant="outline" color={"red"} size="sm">
                Block
              </Button>
            </Stack>
          </Group>

          <VerticalKeyValuePair label="First Name" value={locker.first_name} />
          <VerticalKeyValuePair label="Last Name" value={locker.last_name} />
          <VerticalKeyValuePair label="School" value="University of Jos" />
        </Stack>
      </Box>

      <Box mt={"md"}>
        <SectionHeader title="Locker Profile" showBorder={false} />
        <Stack mt="md">
          <Grid>
            <Grid.Col md={6}>
              <VerticalKeyValuePair label="Total Items" value="10 Items" />
            </Grid.Col>
            <Grid.Col md={6}>
              <VerticalKeyValuePair label="Items Value" value="$100" />
            </Grid.Col>
          </Grid>
          <VerticalKeyValuePair label="Status" value="Value" />
          <Grid>
            <Grid.Col md={6}>
              <VerticalKeyValuePair label="Created on" value="Value" />
            </Grid.Col>
            <Grid.Col md={6}>
              <VerticalKeyValuePair label="Last updated" value="Value" />
            </Grid.Col>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};