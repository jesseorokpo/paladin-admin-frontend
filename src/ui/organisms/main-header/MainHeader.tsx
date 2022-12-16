import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Box,
  Stack,
  Title,
  Group,
  Input,
  Avatar,
  Menu,
  Button,
  ActionIcon,
} from "@mantine/core";
import { IconNotification, IconSearch } from "@tabler/icons";
import LogoLightSvgComponent from "@ui/svg/LogoLight";
import {
  CardTick,
  Message,
  Notification,
  Shop,
  ShoppingBag,
  ShoppingCart,
} from "iconsax-react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";

const MainHeader: React.FC<{
  setOpened: (data: any) => void;
  opened: boolean;
}> = ({ opened, setOpened }) => {
  let theme = useMantineTheme();
  return (
    <Header
      height={60}
      sx={(theme) => {
        return {
          borderBottom: "0px solid gray",
          zIndex: 200,
          background: theme.primaryColor,
          color: "whitesmoke",
        };
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Stack align={"center"} justify="center" px="md">
            <Burger
              opened={opened}
              onClick={() => setOpened((o: any) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </Stack>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group
            sx={(theme) => {
              return {
                height: "100%",
                width: "250px",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
              };
            }}
            p="md"
          >
            <LogoLightSvgComponent height={30} style={{}} />
            <Title size={"md"}>Admin</Title>
          </Group>
        </MediaQuery>
        <Box p="md" sx={{ flex: 1 }}>
          <Group
            align={"center"}
            spacing="xl"
            sx={{ justifyContent: "space-between" }}
          >
            <Box></Box>
            <Box>
              <Group>
                <Link to={"/store"}>
                  <ActionIcon>
                    <Shop />
                  </ActionIcon>
                </Link>

                <UserPrimaryActions />
              </Group>
            </Box>
          </Group>
        </Box>
      </div>
    </Header>
  );
};

function UserPrimaryActions() {
  return (
    <Avatar
      src={
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
      }
      size="md"
      radius={"xl"}
    />
  );
}

export default MainHeader;
