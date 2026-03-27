import { Button, Grid, Paper, Stack, Text } from "@mantine/core";
import CartItems from "./cartItems/CartItems";
import Summary from "./summary/Summary";
import { useUIMode } from "../../../../contexts/UIModeContext";
import { ArchiveX, ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../../../core/CartContext";
import { notifications } from "@mantine/notifications";
import type { CheckoutFormProps } from "../../../../core/logic/useCheckoutForm";

const TAX = 119;

const Cart = ({ form }: CheckoutFormProps) => {
  const { mode } = useUIMode();
  const { items, removeMultipleItems } = useCart();
  const [checked, setChecked] = useState<string[]>(
    items.map((i) => `${i.product.id}-${i.variant}`),
  );

  const checkedItems = items.filter((item) =>
    checked.includes(`${item.product.id}-${item.variant}`),
  );
  const checkedTotalPrice = checkedItems.reduce((acc, item) => {
    const variantPrice = item.product.variants[item.variant].price;
    return acc + variantPrice * item.quantity;
  }, 0);

  const handlePayment = () => {
    const result = form.validate();
    if (result.hasErrors) return;

    removeMultipleItems(checkedItems);
    notifications.show({
      position: "bottom-center",
      withCloseButton: true,
      autoClose: 3000,
      title: "Úspěšně zaplaceno",
      message: "Vaše objednávka byla úspěšně přijata.",
      color: "teal",
      icon: <Check />,
    });
  };

  const cartItems = <CartItems checked={checked} setChecked={setChecked} />;
  const summary = items.length > 0 && (
    <Summary TAX={TAX} checkedTotalPrice={checkedTotalPrice} />
  );

  const emptyCart = (
    <Stack h={"100%"} justify="center" align="center">
      <Text fw={500} c="red">
        Košík je prázdný
      </Text>
      {mode === "AST" && <ArchiveX size={50} color="gray" />}
    </Stack>
  );

  if (items.length === 0) {
    return emptyCart;
  }

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
          disabled={checked.length === 0}
          onClick={handlePayment}
        >
          <Stack gap={0} align="flex-start">
            <Text size="xs" tt="uppercase" fw={600} c="dimmed">
              Zaplatit
            </Text>
            <Text fw={700} size="xl">
              {(checkedTotalPrice + TAX).toFixed(2)} CZK
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
