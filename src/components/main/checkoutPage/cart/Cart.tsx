import { Grid, Paper, Stack } from "@mantine/core";
import CartItems from "./cartItems/CartItems";
import Summary from "./summary/Summary";
import { useUIMode } from "../../../../contexts/UIModeContext";

const Cart = () => {
  const { mode } = useUIMode();

  const cartItems = <CartItems />;
  const summary = <Summary />;

  return mode === "EFF" ? (
    <Stack h="100%" justify="space-between">
      {cartItems}
      {summary}
    </Stack>
  ) : (
    <Grid>
      <Grid.Col span={6}>{cartItems}</Grid.Col>
      <Grid.Col
        span={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper w="75%">{summary}</Paper>
      </Grid.Col>
    </Grid>
  );
};

export default Cart;
