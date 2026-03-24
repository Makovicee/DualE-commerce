import {
  Checkbox,
  Group,
  Stack,
  Table,
  Text,
  Image,
  UnstyledButton,
} from "@mantine/core";
import ItemRow from "./ItemRow";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import ItemCard from "./ItemCard";
import { Carousel } from "@mantine/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useRef, type Dispatch, type SetStateAction } from "react";
import { useCart } from "../../../../../core/CartContext";

const ITEMS = [
  { id: 1, name: "Název položky", size: "XS", quantity: 3, price: 509 },
  { id: 2, name: "Název položky", size: "XL", quantity: 1, price: 129 },
  { id: 3, name: "Název položky", size: "XL", quantity: 4, price: 147 },
  { id: 4, name: "Název položky", size: "XS", quantity: 8, price: 841 },
];

interface CartItemsProps {
  checked: string[];
  setChecked: Dispatch<SetStateAction<string[]>>;
}

const CartItems = ({ checked, setChecked }: CartItemsProps) => {
  const { mode } = useUIMode();
  const { items, removeItem, updateItemCount, clearCart, totalPrice } =
    useCart();

  const emblaApi = useRef<EmblaCarouselType | null>(null);

  const toggleCheck = (key: string) =>
    setChecked((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  return (
    <>
      {mode === "EFF" ? (
        <Stack gap="xl" px="md">
          <Group ml="xs">
            <Checkbox
              indeterminate={
                checked.length > 0 && checked.length < items.length
              }
              checked={checked.length === items.length}
              onChange={() =>
                setChecked(
                  checked.length === items.length
                    ? []
                    : items.map((i) => `${i.product.id}-${i.variant}`),
                )
              }
            />
            <Text
              size="xs"
              c="red"
              fw={500}
              style={{ cursor: "pointer" }}
              onClick={clearCart}
            >
              Smazat vše
            </Text>
          </Group>
          {items.length > 0 ? (
            <Table>
              <Table.Tbody>
                {items.map((item) => {
                  const key = `${item.product.id}-${item.variant}`;
                  return (
                    <ItemRow
                      key={key}
                      name={item.product.name}
                      size={item.variant}
                      quantity={item.quantity}
                      price={
                        item.product.variants[item.variant].price *
                        item.quantity
                      }
                      checked={checked.includes(key)}
                      onCheck={() => toggleCheck(key)}
                      onRemove={() => removeItem(item.product.id, item.variant)}
                      onQuantityChange={(qty) =>
                        updateItemCount(item.product, item.variant, qty)
                      }
                    />
                  );
                })}
              </Table.Tbody>
              <Table.Tfoot>
                <Table.Tr>
                  <Table.Td colSpan={4}>
                    <Text size="xs">Celkem</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="xs" fw={700}>
                      {totalPrice.toFixed(2)}
                    </Text>
                  </Table.Td>
                  <Table.Td />
                </Table.Tr>
              </Table.Tfoot>
            </Table>
          ) : (
            <Text ta={"center"} size="sm" c="dimmed">
              Žádné položky v košíku
            </Text>
          )}
        </Stack>
      ) : (
        <Stack gap={0}>
          <Carousel
            withControls={false}
            withIndicators
            getEmblaApi={(api) => {
              emblaApi.current = api;
            }}
            emblaOptions={{ loop: true }}
          >
            {ITEMS.map((item) => (
              <Carousel.Slide key={item.id}>
                <ItemCard />
              </Carousel.Slide>
            ))}
          </Carousel>

          <Group justify="space-between" px="xs" mt="xs">
            <UnstyledButton onClick={() => emblaApi.current?.scrollPrev()}>
              <Stack gap="xs">
                <Group c={"astGreen"} gap={0}>
                  <ChevronLeft strokeWidth={3} size={22} />
                  <Text fw={500} c="dimmed" size="xs">
                    Název Položky
                  </Text>
                </Group>
                <Image
                  src={null}
                  fallbackSrc="https://placehold.co/60x60"
                  h={48}
                  w={48}
                  radius="sm"
                />
              </Stack>
            </UnstyledButton>

            <UnstyledButton onClick={() => emblaApi.current?.scrollNext()}>
              <Stack gap="xs" align="flex-end">
                <Group c={"astGreen"} gap={0}>
                  <Text fw={500} c="dimmed" size="xs">
                    Název Položky
                  </Text>
                  <ChevronRight strokeWidth={3} size={22} />
                </Group>
                <Image
                  src={null}
                  fallbackSrc="https://placehold.co/60x60"
                  h={48}
                  w={48}
                  radius="sm"
                />
              </Stack>
            </UnstyledButton>
          </Group>
        </Stack>
      )}
    </>
  );
};

export default CartItems;
