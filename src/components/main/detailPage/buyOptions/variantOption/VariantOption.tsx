import { Center, Group, Radio, Stack, Text } from "@mantine/core";
import { Sprout } from "lucide-react";
import type { ProductVariant } from "../../../../../core/data/products";

const VariantOption = ({ variant }: { variant: ProductVariant }) => {
  return (
    <Radio.Card
      radius="md"
      value={variant.size}
      p="sm"
      disabled={variant.stock === 0}
      style={{
        opacity: variant.stock === 0 ? 0.4 : 1,
        cursor: variant.stock === 0 ? "not-allowed" : "pointer",
      }}
    >
      <Stack gap={"xs"}>
        <Group justify="space-between" align="flex-start">
          <Stack gap={0}>
            <Text fw={600}>
              {variant.size}{" "}
              <Text span size="sm" c="dimmed">
                ({variant.sizeLabel})
              </Text>
            </Text>
            <Text size="sm" c={variant.stock > 0 ? "teal" : "red"} fs="italic">
              {variant.stock > 0 ? "Skladem" : "Vyprodáno"}
            </Text>
          </Stack>
          <Radio.Indicator />
        </Group>

        <Center>
          <Sprout
            size={variant.size === "S" ? 26 : variant.size === "M" ? 36 : 46}
          />
        </Center>

        <Text ta="right" size="sm" c="dimmed" fw={500}>
          {variant.price} Kč
        </Text>
      </Stack>
    </Radio.Card>
  );
};

export default VariantOption;
