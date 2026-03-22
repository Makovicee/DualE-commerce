import { Box, Center, Stack } from "@mantine/core";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import ProductHeader from "./productHeader/ProductHeader";
import type { Product } from "../../../../core/data/products";

const ProductShowCase = ({ product }: { product: Product }) => {
  return (
    <Stack gap={"xl"}>
      <ProductHeader product={product} />
      <Center>
        <Box w={"75%"}>
          <AdditionalInfo product={product} />
        </Box>
      </Center>
    </Stack>
  );
};

export default ProductShowCase;
