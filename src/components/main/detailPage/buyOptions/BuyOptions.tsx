import { Center, Group, Radio, Stack } from "@mantine/core";
import { useState } from "react";
import VariantOption from "./variantOption/VariantOption";
import Preview from "./preview/Preview";
import type { Product, VariantSize } from "../../../../core/data/products";

const BuyOptions = ({ product }: { product: Product }) => {
  const [value, setValue] = useState<VariantSize>("M");

  return (
    <Center>
      <Group w={"75%"} align="stretch" wrap="nowrap">
        <Radio.Group
          value={value}
          onChange={(value) => setValue(value as VariantSize)}
        >
          <Stack gap="sm" w={300}>
            {Object.values(product.variants).map((variant) => (
              <VariantOption key={variant.size} variant={variant} />
            ))}
          </Stack>
        </Radio.Group>
        <Preview product={product} selectedVariant={value} />
      </Group>
    </Center>
  );
};

export default BuyOptions;
