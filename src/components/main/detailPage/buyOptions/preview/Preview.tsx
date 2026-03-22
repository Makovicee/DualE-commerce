import {
  Card,
  Image,
  Text,
  Group,
  Center,
  Stack,
  ActionIcon,
} from "@mantine/core";
import { ShoppingBasket } from "lucide-react";
import type { Product, VariantSize } from "../../../../../core/data/products";

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

  return (
    <Card flex={1} withBorder>
      <Card.Section flex={1} withBorder p={"md"}>
        <Center h={"100%"}>
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
      <Card.Section withBorder pt={"sm"}>
        <Group justify="flex-end" gap="md">
          <Stack align="flex-end" gap={0}>
            <Text fw={700} size="xl">
              {variant.price} Kč
            </Text>
          </Stack>
          <ActionIcon color={"grape"} size={"input-xl"}>
            <ShoppingBasket size={36} />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default Preview;
