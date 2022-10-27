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
  Container,
  Divider,
  Grid,
  TextInput,
  Button,
} from "@mantine/core";
import { IconBrandFacebook } from "@tabler/icons";
import { Instagram } from "iconsax-react";
import FacebookIcon from "../../molecules/icons/facebook.svg";
import InstagramIcon from "../../molecules/icons/instagram.svg";
import TwitterIcon from "../../molecules/icons/twitter.svg";

const MarketplaceFooter: React.FC<{}> = ({}) => {
  let theme = useMantineTheme();
  return (
    <Box
      sx={(theme) => {
        return { background: "#432818", color: "ghostwhite" };
      }}
    >
      <Container size={"lg"} sx={{ padding: "42px 0px" }}>
        <Grid sx={{ padding: 0, margin: 0 }} justify="space-between">
          <Grid.Col md={5}>
            <Stack>
              <Text sx={{ fontWeight: "bold" }}>Be the first to know</Text>
              <Group
                sx={{
                  border: "1px solid gray",
                  borderRadius: 8,
                  padding: 0,
                  overflow: "hidden",
                }}
                align="stretch"
              >
                <TextInput
                  placeholder="Enter Your Email Address"
                  variant="unstyled"
                  sx={{
                    flex: 1,
                    padding: 8,
                    margin: 0,
                  }}
                />
                <Stack
                  justify={"center"}
                  p={"8px 16px"}
                  sx={{ background: "white", color: "black" }}
                >
                  Submit
                </Stack>
              </Group>
              <Group>
                <img src={FacebookIcon} />
                <img src={TwitterIcon} />
                <img src={InstagramIcon} />
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col md={6}>
            <Grid sx={{ padding: 0, margin: 0 }}>
              <Grid.Col xs={6} sm={6} md={4} style={{ marginBottom: 24 }}>
                <Stack align={"stretch"}>
                  <Text sx={{ fontWeight: "bold" }}>Company</Text>
                  {[
                    "Contact Us",
                    "Visit Knowledge Base",
                    "Support System",
                    "Onsite Training",
                  ].map((element) => {
                    return <Text>{element}</Text>;
                  })}
                </Stack>
              </Grid.Col>
              <Grid.Col xs={6} sm={6} md={4} style={{ marginBottom: 24 }}>
                <Stack align={"stretch"}>
                  <Text sx={{ fontWeight: "bold" }}>Support</Text>
                  {["About", "Blog", "Careers", "Features"].map((element) => {
                    return <Text>{element}</Text>;
                  })}
                </Stack>
              </Grid.Col>
              <Grid.Col md={4} style={{ marginBottom: 24 }}>
                <Stack>
                  <Text sx={{ fontWeight: "bold" }}>Legal</Text>
                  {[
                    "User Agreements",
                    "Terms of Service",
                    "Privacy Impact Accessment",
                  ].map((element) => {
                    return <Text>{element}</Text>;
                  })}
                </Stack>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
      <Container size={"lg"}>
        <Divider />
        <Text sx={{ textAlign: "center", padding: "24px 0px" }}>
          All Rights Reserved © 2022
        </Text>
      </Container>
    </Box>
  );
};

export default MarketplaceFooter;
