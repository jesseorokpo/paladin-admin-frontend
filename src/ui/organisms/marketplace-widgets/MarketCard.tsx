import { Paper, Stack, Divider, MediaQuery, Box, Text } from "@mantine/core";
import {} from "iconsax-react";
import { useNavigate } from "react-router-dom";

export const MarketCard = () => {
  let navigate = useNavigate();
  return (
    <Paper
      withBorder
      sx={{ overflow: "hidden" }}
      onClick={() => {
        navigate("/market/market");
      }}
    >
      <Box>
        <Box
          sx={{
            paddingTop: "80%",
            backgroundColor: "#D3F4FF",
          }}
        ></Box>
      </Box>
      <Box sx={{ flex: 1, textAlign: "center" }}>
        <Stack px="12px" spacing={"xs"} py="12px">
          <Box>
            <Text sx={{ fontWeight: "bold" }}>Idumota Market</Text>
            <Text>Rivers State</Text>
          </Box>
          <Divider color={"ghostwhite"} size="xs" />

          <MediaQuery
            smallerThan="sm"
            styles={{
              display: "none",
            }}
          >
            <Text sx={{ fontSize: 12 }}>
              35 Total Sellers & 26 Total Products
            </Text>
          </MediaQuery>
        </Stack>
      </Box>
    </Paper>
  );
};
