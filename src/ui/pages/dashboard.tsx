import {
  Avatar,
  Button,
  Grid,
  Paper,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { authManager } from "@store/account/auth";
import { orderManager } from "@store/catalog/order";
import { lockerManager } from "@store/locker";
import { payoutManager } from "@store/payout";
import { usersManager } from "@store/users";
import { VerticalKeyValuePair } from "@ui/molecules/text";
import { MainStatsCard } from "@ui/organisms/dashboard-widgets";
import { SectionHeader } from "@ui/organisms/header-widgets/SectionHeader";
import { Card, Document, LockCircle } from "iconsax-react";
import { observer } from "mobx-react";

export const DashboardScreen = () => {
  let theme = useMantineTheme();
  return (
    <Stack spacing={"xl"} justify="stretch" mt={"xl"}>
      <AccountOverview />
      <AccountOthers />
    </Stack>
  );
};

const AccountOverview = observer(() => {
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
              label="Total Lockers"
              caption="at this moment"
              color="orange"
              icon={<Document variant="Bold" color="gray" />}
              value={lockerManager.items.length + ""}
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Orders"
              caption="at this moment"
              color="orange"
              icon={<Document variant="Bold" color="gray" />}
              value={orderManager.items.length + ""}
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Agents"
              caption="at this moment"
              color="orange"
              icon={<Card variant="Bold" color="gray" />}
              value={usersManager.agents.length + ""}
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Total Payouts "
              caption="at this moment"
              color="orange"
              icon={<Card variant="Bold" color="gray" />}
              value={payoutManager.items.length + ""}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
});

const AccountOthers = observer(() => {
  let profile = authManager.user;
  return (
    <Paper
      p={"18px"}
      sx={(theme) => {
        return { width: "100%", background: "white" };
      }}
      shadow="md"
    >
      <Stack>
        <Grid>
          <Grid.Col md={12}>
            <Stack>
              <SectionHeader
                title="Profile"
                showBorder={false}
                right={
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                }
              />

              <Grid>
                <Grid.Col md={2}>
                  <Avatar
                    size={"xl"}
                    src="https://business.appstate.edu/sites/default/files/styles/asu_news_full/public/asu_news/student-profile-javon-nathaniel.jpg?itok=-KyYkUKf"
                  />
                </Grid.Col>
                <Grid.Col md={5}>
                  <VerticalKeyValuePair label="First Name" value={profile?.first_name} />
                  <VerticalKeyValuePair label="Last Name" value={profile?.last_name} />
                  <VerticalKeyValuePair label="Email" value={profile?.email} />
                </Grid.Col>
                <Grid.Col md={5}>
                  <VerticalKeyValuePair label="Phone" value={profile?.phone ?? "N/A"} />
                  <VerticalKeyValuePair label="Address" value="N/A" />
                  <VerticalKeyValuePair label="Status" value="Active" />
                </Grid.Col>
              </Grid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
});
