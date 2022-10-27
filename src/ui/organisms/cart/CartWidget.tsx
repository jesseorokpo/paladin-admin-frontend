import { useState } from "react";
import {
  Drawer,
  ActionIcon,
  Text,
  Center,
  useMantineTheme,
  Box,
  Stack,
  Button,
  Group,
  Divider,
  TextInput,
} from "@mantine/core";
import { Add, Minus, ShoppingCart, Verify } from "iconsax-react";
import { useTheme } from "@emotion/react";
import { cartManager } from "@store/cart";
import { observer } from "mobx-react";
import { CartItemCard } from "./CartItem";
import { HorizontalKeyValuePair } from "@ui/molecules/text";
import { formatCurrency } from "../../../utils";

export const CartWidget = observer(() => {
  const [opened, setOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const theme = useMantineTheme();

  let [step, setStep] = useState(1);

  const CartBag = (
    <Stack>
      <Stack>
        <Box>
          {cartManager.items.map((e, index) => {
            return <CartItemCard e={e} key={index} />;
          })}
        </Box>
      </Stack>
      {cartManager.items.length == 0 ? null : (
        <Button
          onClick={() => {
            setStep(2);
          }}
        >
          Checkout
        </Button>
      )}
    </Stack>
  );

  const CheckoutBag = (
    <Stack>
      <Stack sx={{ width: "100%" }}>
        {cartManager.items.map((e) => {
          return (
            <Box>
              <Group position="apart">
                <Text>
                  {e.name} x {e.quantity}
                </Text>
                <Text>{`${formatCurrency(e.price * e.quantity)}`}</Text>
              </Group>
            </Box>
          );
        })}
      </Stack>

      <Divider />
      <Group position="apart">
        <Text>Total</Text>
        <Text>{`${formatCurrency(100)}`}</Text>
      </Group>

      <TextInput
        label="PID"
        rightSection={
          <ActionIcon>
            <Verify />
          </ActionIcon>
        }
      />
      <Box>
        <Button
          fullWidth
          loading={isLoading}
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              window.open("https://paystack.com/pay/-k8id-yo-4");
              cartManager.clear();
              setOpened(false);
            }, 2000);
          }}
        >
          {" "}
          Proceed
        </Button>
      </Box>
    </Stack>
  );

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Shopping Bag"
        padding="xl"
        size="xl"
      >
        {step == 1 ? CartBag : CheckoutBag}
      </Drawer>

      <ActionIcon
        onClick={() => {
          setOpened(true);
        }}
      >
        <ShoppingCart />

        <Center
          sx={{
            position: "absolute",
            top: -7,
            right: -7,
            borderRadius: 50,
            background: theme.colors.brown[5],
            width: 17,
            height: 17,
          }}
        >
          <Text color="white" sx={{ fontSize: 10 }}>
            {cartManager.items.length}
          </Text>
        </Center>
      </ActionIcon>
    </>
  );
});
