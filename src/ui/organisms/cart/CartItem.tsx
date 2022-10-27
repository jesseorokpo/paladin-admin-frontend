import { useState } from "react";
import {
  Drawer,
  ActionIcon,
  Text,
  Center,
  useMantineTheme,
  Box,
  Avatar,
  Group,
  Input,
  Button,
  Stack,
} from "@mantine/core";
import { Add, Minus, ShoppingCart } from "iconsax-react";
import { useTheme } from "@emotion/react";
import { cartManager } from "@store/cart";
import { observer } from "mobx-react";
import { CartItem } from "@interface/models";

export const CartItemCard = ({ e }: { e: CartItem }) => {
  return (
    <Box
      mb="12"
      sx={{ borderBottom: ".5px solid rgba(200,200,200,.5)" }}
      py="md"
    >
      <Group>
        <Avatar size={"lg"} src={e.image} />
        <Box sx={{ flex: 1 }}>
          <Text>{e.name}</Text>
          <Text size={"sm"} color="gray">
            Quantity{e.quantity}
          </Text>
        </Box>

        <Box>
          <Group mb="4px">
            <ActionIcon
              color={"brown"}
              variant="light"
              size={"xs"}
              onClick={() => {
                cartManager.addItemQuantity(e, 1);
              }}
            >
              <Add size={14} />
            </ActionIcon>
            <Text size={"sm"}>{e.quantity}</Text>
            <ActionIcon
              color={"brown"}
              variant="light"
              size={"xs"}
              onClick={() => {
                cartManager.addItemQuantity(e, -1);
              }}
            >
              <Minus />
            </ActionIcon>
          </Group>
          <Button
            size="xs"
            variant="light"
            onClick={() => {
              cartManager.removeItem(e);
            }}
          >
            Remove
          </Button>
        </Box>
      </Group>
    </Box>
  );
};
