import { Box, Center, Stack } from "@mantine/core";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import ProductHeader from "./productHeader/ProductHeader";

const ProductShowCase = () => {
  return (
    <Stack gap={"xl"}>
      <ProductHeader />
      <Center>
        <Box w={"75%"}>
          <AdditionalInfo />
        </Box>
      </Center>
    </Stack>
  );
};

export default ProductShowCase;
