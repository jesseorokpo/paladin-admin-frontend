import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Text,
  Box,
  Group,
  Button,
  Container,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { CartWidget } from "../cart/CartWidget";
import Logo from "./logo.svg";

const MarketplaceHeader: React.FC<{
  setOpened: (data: any) => void;
  opened: boolean;
}> = ({ opened, setOpened }) => {
  let theme = useMantineTheme();
  return (
    <Header
      height={60}
      sx={(theme) => {
        return { borderBottom: "0px solid gray", boxShadow: theme.shadows.md };
      }}
    >
      <Container size={"lg"} sx={{ height: "100%" }}>
        <Group
          style={{ display: "flex", height: "100%" }}
          align="center"
          position="apart"
        >
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o: any) => !o)}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box
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
              <Title size={"md"}>Paladin Ecommerce</Title>
            </Box>
          </MediaQuery>

          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Box>
              <Group position="center">
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "/about" },
                  { label: "Contact Us", path: "/contact" },
                ].map((element) => {
                  return (
                    <Link
                      to={element.path}
                      style={{ textDecoration: "none", color: "#404040" }}
                    >
                      <Text>{element.label}</Text>
                    </Link>
                  );
                })}
              </Group>
            </Box>
          </MediaQuery>

          <Group align={"center"}>
            <CartWidget />
            <Link to={"/account"}>
              <Button>Account</Button>
            </Link>
          </Group>
        </Group>
      </Container>
    </Header>
  );
};

export default MarketplaceHeader;
