import {
  Card,
  Image,
  Text,
  Group,
  Center,
  Stack,
  ActionIcon,
  Badge,
  Transition,
} from "@mantine/core";
import { BadgePercent, Check, ShoppingBasket } from "lucide-react";
import type { Product, VariantSize } from "../../../../../core/data/products";
import { useCart } from "../../../../../core/CartContext";
import { useEffect, useState } from "react";

interface PreviewProps {
  product: Product;
  selectedVariant: VariantSize;
}

const SIZE_MAP: Record<VariantSize, number> = {
  S: 230,
  M: 280,
  XL: 330,
};

const Preview = ({ product, selectedVariant }: PreviewProps) => {
  const variant = product.variants[selectedVariant];
  const imageSize = SIZE_MAP[selectedVariant];
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, selectedVariant);
    setAdded(true);
  };

  useEffect(() => {
    if (!added) return;
    const timer = setTimeout(() => setAdded(false), 1000);
    return () => clearTimeout(timer);
  }, [added]);

  return (
    <Card flex={1} withBorder>
      <Card.Section flex={1} withBorder p="md">
        {product.discount && (
          <Badge p="xs" h={75} color="grape" pos="absolute" top={16} right={16}>
            <Stack gap="xs">
              <Text size="xs" fw={500}>
                {product.discount * 100}
              </Text>
              <BadgePercent size={20} />
            </Stack>
          </Badge>
        )}
        <Center h="100%">
          <Image
            src={product.img}
            fallbackSrc="https://placehold.co/300x300"
            h={imageSize}
            w={imageSize}
            style={{
              transition: "all 500ms ease-in-out",
              transform: `rotate(${selectedVariant === "S" ? -15 : selectedVariant === "XL" ? 15 : 0}deg)`,
            }}
          />
        </Center>
      </Card.Section>
      <Card.Section withBorder pt="sm">
        <Group justify="flex-end" gap="md">
          <Stack align="flex-end" gap={0}>
            <Text fw={700} size="xl">
              {Math.ceil(variant.price * (1 - (product.discount ?? 0)))} Kč
            </Text>
            {product.discount && (
              <Text fw={500} size="sm" c="dimmed" td="line-through">
                {variant.price} Kč
              </Text>
            )}
          </Stack>

          <ActionIcon
            color={added ? "teal" : "grape"}
            size="input-xl"
            onClick={handleAdd}
            style={{
              transition: "background-color 300ms ease",
              pointerEvents: added ? "none" : "auto",
            }}
            disabled={variant.stock === 0}
          >
            <Transition mounted={!added} transition="slide-up" duration={200}>
              {(styles) => (
                <span style={{ position: "absolute", ...styles }}>
                  <ShoppingBasket size={36} />
                </span>
              )}
            </Transition>
            <Transition mounted={added} transition="slide-up" duration={200}>
              {(styles) => (
                <span style={{ position: "absolute", ...styles }}>
                  <Check size={36} />
                </span>
              )}
            </Transition>
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default Preview;
