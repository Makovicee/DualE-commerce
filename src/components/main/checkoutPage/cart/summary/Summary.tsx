import { Divider, Group, Stack, Text } from "@mantine/core";
import { useCart } from "../../../../../core/CartContext";
import { useUIMode } from "../../../../../contexts/UIModeContext";

const Summary = ({
  TAX,
  checkedTotalPrice,
}: {
  TAX: number;
  checkedTotalPrice: number;
}) => {
  const { totalPrice } = useCart();

  const { mode } = useUIMode();

  return (
    <Stack>
      <Group justify="space-between">
        <Text size="xs" fw={500} c="dimmed">
          Mezisoučet
        </Text>
        <Text size="xs" fw={500}>
          {mode === "EFF" ? checkedTotalPrice : totalPrice} Kč
        </Text>
      </Group>

      <Group justify="space-between">
        <Text size="xs" fw={500} c="dimmed">
          Daň
        </Text>
        <Text size="xs" fw={500}>
          +{TAX} Kč
        </Text>
      </Group>

      <Group justify="space-between">
        <Text size="xs" fw={500} c="dimmed">
          Doprava
        </Text>
        <Text size="xs" fw={500} c={"teal"}>
          Zdarma
        </Text>
      </Group>

      <Divider />
      <Group justify="space-between">
        <Text size="xs" fw={500} c="dimmed">
          Celkem
        </Text>
        <Text size="xs" fw={500}>
          {mode === "EFF" ? checkedTotalPrice + TAX : totalPrice + TAX}
        </Text>
      </Group>
    </Stack>
  );
};

export default Summary;
