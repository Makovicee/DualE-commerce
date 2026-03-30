import {
  Checkbox,
  Group,
  Stack,
  Table,
  Text,
  Image,
  UnstyledButton,
  ScrollArea,
} from "@mantine/core";
import ItemRow from "./ItemRow";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import ItemCard from "./ItemCard";
import { Carousel } from "@mantine/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { useCart } from "../../../../../core/CartContext";

interface CartItemsProps {
  checked: string[];
  setChecked: Dispatch<SetStateAction<string[]>>;
}

const CartItems = ({ checked, setChecked }: CartItemsProps) => {
  const { mode } = useUIMode();
  const { items, removeItem, updateItemCount, clearCart, totalPrice } =
    useCart();

  const emblaApi = useRef<EmblaCarouselType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];

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
          <ScrollArea mah="35vh" offsetScrollbars type="auto">
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
          </ScrollArea>
        </Stack>
      ) : (
        <Stack gap={0}>
          <Carousel
            withControls={false}
            withIndicators
            getEmblaApi={(api) => {
              emblaApi.current = api;
              api.on("select", () => setCurrentIndex(api.selectedScrollSnap()));
            }}
            emblaOptions={{ loop: true }}
          >
            {items.map((item) => (
              <Carousel.Slide key={`${item.product.id}-${item.variant}`}>
                <ItemCard item={item} />
              </Carousel.Slide>
            ))}
          </Carousel>

          <Group justify="space-between" px="xs" mt="xs">
            <UnstyledButton onClick={() => emblaApi.current?.scrollPrev()}>
              <Stack gap="xs">
                <Group c={"astGreen"} gap={0}>
                  <ChevronLeft strokeWidth={3} size={22} />
                  <Text fw={500} c="dimmed" size="xs">
                    {prevItem?.product?.name} - {prevItem?.variant}
                  </Text>
                </Group>
                <Image
                  src={prevItem?.product?.img}
                  fallbackSrc="https://placehold.co/60x60"
                  h={100}
                  w={100}
                  radius="sm"
                />
              </Stack>
            </UnstyledButton>

            <UnstyledButton onClick={() => emblaApi.current?.scrollNext()}>
              <Stack gap="xs" align="flex-end">
                <Group c={"astGreen"} gap={0}>
                  <Text fw={500} c="dimmed" size="xs">
                    {nextItem?.product?.name} - {nextItem?.variant}
                  </Text>

                  <ChevronRight strokeWidth={3} size={22} />
                </Group>
                <Image
                  src={nextItem?.product?.img}
                  fallbackSrc="https://placehold.co/60x60"
                  h={100}
                  w={100}
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
