import { TProduct } from "@interface/models";
import {
  ActionIcon,
  Box,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { cartManager } from "@store/cart";
import { IconCamera } from "@tabler/icons";
import { Camera, ShoppingCart } from "iconsax-react";
import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../../utils";

export default function ProductCard({ product }: { product: TProduct }) {
  let navigate = useNavigate();
  let theme = useMantineTheme();
  return (
    <Box>
      <Paper withBorder sx={{ overflow: "hidden" }} px={14}>
        <Box
          pt={14}
          onClick={() => {
            navigate(`/products/${product.id}`);
          }}
        >
          <Box
            sx={{
              paddingTop: "100%",
              backgroundColor: "#404040",
              position: "relative",
              borderRadius: 8,
              backgroundImage: `url(${product.thumbnail})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <Box sx={{ position: "absolute", bottom: 12, left: 12 }}>
              <Box
                sx={{
                  color: "white",
                  padding: "2px 6px",
                  background: "rgba(200,200,200,.3)",

                  borderRadius: 50,
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <IconCamera color="white" size={12} />
                <Text pl={"4px"} size="xs">
                  10
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Stack spacing={"xs"} sx={{ flex: 1 }} px="12px" py="12px">
          <Box>
            <Title
              size={"md"}
              color="#183B56"
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              {product.title}
            </Title>
            <Group position="apart">
              <Box>
                <Text size={"sm"} sx={{ color: "#183B56" }}>
                  {product.category}
                </Text>
                <Title size={"md"} color="#183B56">
                  {formatCurrency(product.price)}
                </Title>
              </Box>

              <ActionIcon
                onClick={() => {
                  cartManager.addItem(product);
                }}
              >
                <ShoppingCart color={theme.colors.brown[5]} />
              </ActionIcon>
            </Group>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
