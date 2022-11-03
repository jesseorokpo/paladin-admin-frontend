import { Box, Grid } from "@mantine/core";
import ProductCard from "../product-widgets/ProductCard";

export default function RenderProductsGrid({
  useMainCard = true,
  products,
}: {
  useMainCard?: boolean;
  products?: any[];
}) {
  console.log(products);
  return (
    <Box>
      <Box>
        <Grid gutter={"xl"}>
          {(products ?? []).map((element, index) => {
            return (
              <Grid.Col span={6} xs={6} sm={4} md={4} lg={3} xl={3} key={index}>
                <ProductCard product={element} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
