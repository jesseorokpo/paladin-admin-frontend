import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Stack,
  Title,
} from "@mantine/core";
import { productManager } from "@store/catalog/product";
import {
  HorizontalKeyValuePair,
  VerticalKeyValuePair,
} from "@ui/molecules/text";
import { Product } from "../../../../sdk/catalog";

export const Expand = ({ product }: { product: Product }) => {
  return (
    <Stack p="md">
      <Grid>
        <Grid.Col md={12}>
          <Grid justify={"space-between"} align="center">
            <Grid.Col md={6}>
              <Group>
                <Avatar src={product.image ?? ""}></Avatar>
                <Title size={"xl"}>Branch Title</Title>
              </Group>
            </Grid.Col>
            <Grid.Col md={6}>
              <Group position="right">
                <Button color={"red"}>Edit</Button>
                <Button
                  color={"green"}
                  onClick={() => {
                    //@ts-ignore
                    productManager.deleteItem(product._id);
                  }}
                >
                  Delete
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col md={12}>
          <Divider />
        </Grid.Col>
        <Grid.Col md={6}>
          <Stack>
            <HorizontalKeyValuePair label="Title" value={product.name} />
            <HorizontalKeyValuePair label="Type" value={product.type} />
            <HorizontalKeyValuePair label="Description" value={product.body} />
          </Stack>
        </Grid.Col>
        <Grid.Col md={6}>
          <Stack>
            <HorizontalKeyValuePair label="Status" value="Goes here" />
            <HorizontalKeyValuePair label="Created At" value="" />
            <HorizontalKeyValuePair label="Updated At" value="N/A" />
          </Stack>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
