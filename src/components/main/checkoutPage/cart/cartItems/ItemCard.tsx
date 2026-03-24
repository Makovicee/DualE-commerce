import {
  ActionIcon,
  Center,
  Group,
  Image,
  NumberInput,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { X } from "lucide-react";
import { useCart, type CartItem } from "../../../../../core/CartContext";

const ItemCard = ({ item }: { item: CartItem }) => {
  const { removeItem, updateItemCount } = useCart();
  return (
    <Paper p={"xs"}>
      <Stack>
        <Group justify="space-between">
          <Group gap="xs">
            <Text size="xl" fw={600}>
              {item.product.name}
            </Text>
            <Text c="dimmed">- {item.variant}</Text>
          </Group>
          <Group gap={"xs"}>
            <NumberInput
              defaultValue={item.quantity}
              min={1}
              styles={{ input: { textAlign: "center" } }}
              w={100}
              onChange={(v) =>
                updateItemCount(item.product, item.variant, Number(v))
              }
            />
            <ActionIcon
              variant="transparent"
              color="red"
              onClick={() => removeItem(item.product.id, item.variant)}
            >
              <X size={20} />
            </ActionIcon>
          </Group>
        </Group>
        <Center>
          <Image
            src={item.product.img}
            fallbackSrc="https://placehold.co/400x300"
            radius="md"
            h={400}
            w={400}
          />
        </Center>
      </Stack>
    </Paper>
  );
};

export default ItemCard;
