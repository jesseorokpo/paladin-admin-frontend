import {
  Paper,
  Stack,
  Divider,
  MediaQuery,
  Box,
  Text,
  Center,
  Title,
} from "@mantine/core";
import { IconBuildingStore } from "@tabler/icons";
import { Heart, HeartRemove, HeartSlash, Verify } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils";

export const MainProductCard = () => {
  let navigate = useNavigate();
  return (
    <Paper
      withBorder
      sx={{ overflow: "hidden" }}
      onClick={() => {
        navigate("/products/product-id");
      }}
      px={14}
    >
      <Box pt={14}>
        <Box
          sx={{
            paddingTop: "70%",
            backgroundColor: "#FEF7E7",
            position: "relative",
            borderRadius: 8,
          }}
        >
          <Box sx={{ position: "absolute", top: 12, left: 12 }}>
            <Heart variant="Outline" color="gray" />
          </Box>
        </Box>
      </Box>
      <Stack spacing={"xs"} sx={{ flex: 1 }} px="12px" py="12px">
        <Box>
          <Title size={"md"}>Product name goes</Title>
          <Text size={"sm"} sx={{}}>
            Category
          </Text>
          <Title size={"md"}>{formatCurrency(1000)}</Title>
        </Box>
      </Stack>
    </Paper>
  );
};
