import { Avatar, Box, Button, Grid, Group, Stack } from "@mantine/core";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import { AgentDetailedDto, User } from "../../../sdk/catalog";

export const AgentDetails = ({
  agent,
  profile,
}: {
  agent: User;
  profile: AgentDetailedDto;
}) => {
  return (
    <Box my="md">
      <Box>
        <SectionHeader title="Agent Profile" showBorder={false} />
        <Stack mt="md">
          <Group position="apart">
            <Avatar
              size={"xl"}
              src="https://business.appstate.edu/sites/default/files/styles/asu_news_full/public/asu_news/student-profile-javon-nathaniel.jpg?itok=-KyYkUKf"
            />
            <Stack>
              {profile.org.status == "active" ? (
                <Button
                  variant="outline"
                  color={"red"}
                  size="sm"
                  onClick={() => {
                    // block user
                  }}
                >
                  Block
                </Button>
              ) : (
                <Button
                  variant="outline"
                  color={"red"}
                  size="sm"
                  onClick={() => {
                    // block user
                  }}
                >
                  Activate
                </Button>
              )}
            </Stack>
          </Group>
          <VerticalKeyValuePair label="First Name" value={agent.first_name} />
          <VerticalKeyValuePair label="Last Name" value={agent.last_name} />
          <VerticalKeyValuePair label="Email" value={agent.email} />
        </Stack>
      </Box>

      <Box mt={"md"}>
        <SectionHeader title="Store Profile" showBorder={false} />
        <Stack mt="md">
          <Grid>
            <Grid.Col md={6}>
              <VerticalKeyValuePair
                label="Total Sales"
                value={profile.totalPurchasWorth}
              />
            </Grid.Col>
            <Grid.Col md={6}>
              <VerticalKeyValuePair
                label="Total Payouts"
                value={profile.totalPayoutsWorth}
              />
            </Grid.Col>
          </Grid>
          <VerticalKeyValuePair label="Status" value="Value" />
          <Grid>
            <Grid.Col md={6}>
              <VerticalKeyValuePair label="Created on" value={`${""}`} />
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
