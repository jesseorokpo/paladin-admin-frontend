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
import MainScreenHeader from "../organisms/screen-widgets/MainScreenHeader";

export const DashboardScreen = () => {
  let theme = useMantineTheme();
  return (
    <Stack spacing={"xl"} justify="stretch" mt={"xl"}>
      <AccountOverview />
      <AccountOthers />
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
              label="Total Orders"
              caption="this month"
              color="orange"
              icon={<Document variant="Bold" color="gray" />}
              value="0"
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Digital Lockers"
              caption="this month"
              color="orange"
              icon={<LockCircle variant="Bold" color="gray" />}
              value="0"
            />
          </Grid.Col>
          <Grid.Col md={3}>
            <MainStatsCard
              label="Expences"
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

function AccountOthers() {
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
                  <VerticalKeyValuePair label="First Name" value="Joshua" />
                  <VerticalKeyValuePair label="Last Name" value="Nwafor" />
                  <VerticalKeyValuePair
                    label="Email"
                    value="joshuanwafor01@gmail.com"
                  />
                </Grid.Col>
                <Grid.Col md={5}>
                  <VerticalKeyValuePair label="Phone" value="+2349019293032" />
                  <VerticalKeyValuePair label="Address" value="N/A" />
                  <VerticalKeyValuePair label="Gender" value="Male" />
                </Grid.Col>
              </Grid>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
    </Paper>
  );
}
