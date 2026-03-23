// src/components/shared/ProductAutocompleteOption.tsx
import { Group, Image, Rating, Stack, Text } from "@mantine/core";
import type { AutocompleteProps } from "@mantine/core";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { PRODUCTS } from "../../../../../core/data/products";
import { Check, Minus, X } from "lucide-react";

export const useAutocompleteRender = (): AutocompleteProps["renderOption"] => {
  const { mode } = useUIMode();

  return ({ option }) => {
    const product = PRODUCTS.find((p) => p.id === option.value);
    if (!product) return null;

    const totalStock = Object.values(product.variants).reduce(
      (acc, v) => acc + v.stock,
      0,
    );
    const [StockIcon, iconColor] =
      totalStock === 0
        ? [X, "red"]
        : totalStock < 30
          ? [Minus, "orange"]
          : [Check, "green"];

    const variantPrices = Object.values(product.variants)
      .map((v) => v.price)
      .join(" / ");

    return mode === "EFF" ? (
      <Group gap="sm" wrap="nowrap">
        <Image
          src={product.img}
          fallbackSrc="https://placehold.co/36x36"
          h={36}
          w={36}
          radius="sm"
        />

        <Stack gap={0}>
          <Group align="center">
            <Text size="sm" fw={500}>
              {product.name}
            </Text>
            <StockIcon strokeWidth={2.5} size={16} color={iconColor} />
          </Group>

          <Text size="xs" c="dimmed">
            {variantPrices} Kč
          </Text>
          <Text size="xs" c="dimmed">
            {product.categoryId}
          </Text>
        </Stack>
      </Group>
    ) : (
      <Group gap="xs" wrap="nowrap">
        <Image
          src={product.img}
          fallbackSrc="https://placehold.co/48x48"
          h={100}
          w={100}
          radius="md"
        />
        <Stack gap={"xs"}>
          <Text size="sm" fw={500}>
            {product.name}
          </Text>
          <Rating value={product.rating} fractions={2} readOnly size="sm" />
        </Stack>
      </Group>
    );
  };
};
