import { Button, Grid, Paper, Stack, Text } from "@mantine/core";
import CartItems from "./cartItems/CartItems";
import Summary from "./summary/Summary";
import { useUIMode } from "../../../../contexts/UIModeContext";
import { ArrowRight } from "lucide-react";

const Cart = () => {
  const { mode } = useUIMode();

  const cartItems = <CartItems />;
  const summary = <Summary />;

  return mode === "EFF" ? (
    <Stack gap={0} h={"100%"} justify="space-between">
      {cartItems}
      <Stack>
        {summary}
        <Button
          h={120}
          px={"xl"}
          justify="space-between"
          rightSection={<ArrowRight size={36} />}
        >
          <Stack gap={0} align="flex-start">
            <Text size="xs" tt="uppercase" fw={600} c="dimmed">
              Zaplatit
            </Text>
            <Text fw={700} size="xl">
              395.00 CZK
            </Text>
          </Stack>
        </Button>
      </Stack>
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
