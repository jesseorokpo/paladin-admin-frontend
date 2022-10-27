import {
  Paper,
  Stack,
  Divider,
  MediaQuery,
  Box,
  Text,
  Center,
  Title,
  Group,
  Avatar,
  Grid,
  Button,
  ActionIcon,
} from "@mantine/core";
import { HeartRemove, HeartSlash, Lock, Lock1, Verify } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils";

export const AssetCard = () => {
  let navigate = useNavigate();
  return (
    <Paper withBorder sx={{ overflow: "hidden" }} onClick={() => {}} px={14}>
      <Grid align={"stretch"} py="md">
        <Grid.Col md={2}>
          <Avatar
            size={"lg"}
            src="https://thumbs.dreamstime.com/b/colgate-strong-teeth-fresh-breath-tooth-paste-white-background-brand-toothpaste-produced-palmolive-ukraine-kyiv-203319315.jpg"
          />
        </Grid.Col>
        <Grid.Col md={10}>
          <Group sx={{}}>
            <Stack spacing={"xs"} sx={{ flex: 1, width: "100%" }}>
              <Box>
                <Title size={"md"} color="#183B56">
                  Product Name
                </Title>
                <Text size={"sm"} sx={{ color: "#183B56" }}>
                  10 Items in locker worth {formatCurrency(1000)}
                </Text>
                <Text size={"sm"} sx={{ color: "#183B56" }}>
                  2 Items exausted worth {formatCurrency(200)}
                </Text>
              </Box>
            </Stack>
            <Stack>
              <ActionIcon>
                <Lock1 />
              </ActionIcon>
            </Stack>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
