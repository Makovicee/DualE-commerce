import { ActionIcon, Button, Divider, Group, Stack, Text } from "@mantine/core";
import { ArrowRight, Redo2, Trash2, Undo2 } from "lucide-react";
import { useCart } from "../../core/CartContext";
import { useNavigate } from "react-router-dom";
import { useHotkeys } from "@mantine/hooks";

const EFFCardFooter = () => {
  const { totalItems, totalPrice, clearCart, undo, redo } = useCart();
  const navigate = useNavigate();

  useHotkeys([
    ["mod+z", undo],
    ["mod+y", redo],
    ["mod+d", clearCart],
  ]);

  return (
    <Group justify="space-between" pl={"xl"} h="100%" align="stretch" gap="xl">
      <Group align="center">
        <Stack gap={4}>
          <Text c="dimmed">Celkem položek</Text>
          <Text fw="bold">{totalItems} ks</Text>
        </Stack>
        <Divider my={"xl"} orientation="vertical" />
        <Stack gap={4}>
          <Text c="dimmed">Součet</Text>
          <Text fw="bold">{totalPrice} Kč</Text>
        </Stack>
      </Group>

      <Group gap="xl" align="center">
        <Stack align="center" gap={2}>
          <ActionIcon
            onClick={clearCart}
            color="red"
            size="input-xs"
            variant="light"
          >
            <Trash2 size={20} />
          </ActionIcon>
          <Text c="dimmed" size="xs">
            ⌘ + D
          </Text>
        </Stack>
        <Divider my={"xl"} orientation="vertical" />
        <Stack align="center" gap={2}>
          <ActionIcon onClick={undo} size="input-xs" variant="light">
            <Undo2 size={20} />
          </ActionIcon>
          <Text c="dimmed" size="xs">
            ⌘ + Z
          </Text>
        </Stack>
        <Stack align="center" gap={2}>
          <ActionIcon onClick={redo} size="input-xs" variant="light">
            <Redo2 size={20} />
          </ActionIcon>
          <Text c="dimmed" size="xs">
            ⌘ + Y
          </Text>
        </Stack>
        <Button
          ml={"xl"}
          radius={0}
          h="100%"
          fw={"bold"}
          size="lg"
          onClick={() => navigate("/checkout")}
        >
          <Group gap={"xs"}>
            Pokračovat k platbě
            <ArrowRight />
          </Group>
        </Button>
      </Group>
    </Group>
  );
};

export default EFFCardFooter;
