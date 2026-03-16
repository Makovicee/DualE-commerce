import { Center, Group, Radio, Stack } from "@mantine/core";
import { useState } from "react";
import VariantOption from "./variantOption/VariantOption";
import Preview from "./preview/Preview";

const BuyOptions = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Center>
      <Group w={"75%"} align="stretch" wrap="nowrap">
        <Radio.Group value={value} onChange={setValue}>
          <Stack gap="sm" w={300}>
            <VariantOption value="standard" />
            <VariantOption value="premium" />
            <VariantOption value="deluxe" />
          </Stack>
        </Radio.Group>
        <Preview />
      </Group>
    </Center>
  );
};

export default BuyOptions;
