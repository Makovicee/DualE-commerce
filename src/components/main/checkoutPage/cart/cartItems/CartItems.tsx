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
import { useRef } from "react";

const ITEMS = [
  { id: 1, name: "Název položky", size: "XS", quantity: 3, price: 509 },
  { id: 2, name: "Název položky", size: "XL", quantity: 1, price: 129 },
  { id: 3, name: "Název položky", size: "XL", quantity: 4, price: 147 },
  { id: 4, name: "Název položky", size: "XS", quantity: 8, price: 841 },
];

const CartItems = () => {
  const { mode } = useUIMode();
  const emblaApi = useRef<EmblaCarouselType | null>(null);

  return (
    <>
      {mode === "EFF" ? (
        <Stack gap={"xl"} px={"md"}>
          <Group ml={"xs"}>
            <Checkbox indeterminate />
            <Text size="xs" c="red" fw={500} style={{ cursor: "pointer" }}>
              Smazat vše
            </Text>
          </Group>
          <Table>
            <Table.Tbody>
              {ITEMS.map((item) => (
                <ItemRow
                  key={item.id}
                  {...item}
                  checked={true}
                  onCheck={() => {}}
                  onRemove={() => {}}
                />
              ))}
            </Table.Tbody>
            <Table.Tfoot>
              <Table.Tr>
                <Table.Td colSpan={4}>
                  <Text size="xs">Celkem</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="xs" fw={700}>
                    {2000.11}
                  </Text>
                </Table.Td>
                <Table.Td />
              </Table.Tr>
            </Table.Tfoot>
          </Table>
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
