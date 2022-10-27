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
} from "@mantine/core";
import { IconBuildingStore } from "@tabler/icons";
import { HeartRemove, HeartSlash, Verify } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils";

export const MainLockerCard = () => {
  let navigate = useNavigate();
  return (
    <Paper
      withBorder
      sx={{ overflow: "hidden" }}
      onClick={() => {
        navigate("/account/lockers/locker-id");
      }}
      px={14}
    >
      <Grid align={"stretch"} py="md">
        <Grid.Col md={2}>
          <Avatar size={"lg"} />
        </Grid.Col>
        <Grid.Col md={10}>
          <Group sx={{}}>
            <Stack spacing={"xs"} sx={{ flex: 1, width: "100%" }}>
              <Box>
                <Title size={"md"} color="#183B56">
                  FullName
                </Title>
                <Text size={"sm"} sx={{ color: "#183B56" }}>
                  PID: #123456
                </Text>
              </Box>
              <Title size={"md"} color="#183B56">
                {formatCurrency(1000)}
              </Title>
            </Stack>
            <Button>View</Button>
          </Group>
        </Grid.Col>
      </Grid>
    </Paper>
  );
};
