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
import { showNotification } from "@mantine/notifications";
import { productManager } from "@store/catalog/product";
import {
  HorizontalKeyValuePair,
  VerticalKeyValuePair,
} from "@ui/molecules/text";
import { UpdateProductProcess } from "@ui/organisms/processes/update-product-process";
import { productApiController } from "../../../../config/sdk";
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
                <UpdateProductProcess product={product}/>
                {product.is_trending !== true ? (
                  <Button
                    color={"green"}
                    onClick={() => {
                      //@ts-ignore
                      productApiController.productControllerUpdate(
                         //@ts-ignore
                        product._id,
                        {
                          ...product,
                          is_trending: true,
                        }
                      );
                      showNotification({message:"Request sent"})
                    }}
                  >
                    Enable Trending
                  </Button>
                ) : (
                  <Button
                    color={"red"}
                    onClick={() => {
                      //@ts-ignore
                      productApiController.productControllerUpdate(
                         //@ts-ignore
                        product._id,
                        {
                          ...product,
                          is_trending: false,
                        }
                      );
                      showNotification({message:"Request sent"})
                    }}
                  >
                    Disable Trending
                  </Button>
                )}

                {product.is_top_product !== true ? (
                  <Button
                    color={"green"}
                    onClick={() => {
                      //@ts-ignore
                      productApiController.productControllerUpdate(
                         //@ts-ignore
                        product._id,
                        {
                          ...product,
                          is_top_product: true,
                        }
                      );
                      showNotification({message:"Request sent"})
                    }}
                  >
                    Enable Top Product
                  </Button>
                ) : (
                  <Button
                    color={"red"}
                    onClick={() => {
                      //@ts-ignore
                      productApiController.productControllerUpdate(
                         //@ts-ignore
                        product._id,
                        {
                          ...product,
                          is_top_product: false,
                        }
                      );
                      showNotification({message:"Request sent"})
                    }}
                  >
                    Disable Top Product
                  </Button>
                )}
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
