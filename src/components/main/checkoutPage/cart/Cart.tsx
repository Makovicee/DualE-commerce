import { Stack } from "@mantine/core";
import CartItems from "./cartItems/CartItems";
import Summary from "./summary/Summary";

const Cart = () => {
  return (
    <Stack h={"100%"} justify="space-between">
      <CartItems />
      <Summary />
    </Stack>
  );
};

export default Cart;
