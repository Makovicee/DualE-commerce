import { ScrollArea, SimpleGrid, Stack } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import ProductCard from "./productCard/ProductCard";

const ProductCollection = () => {
  const { mode } = useUIMode();

  return (
    <>
      {mode === "EFF" ? (
        <ScrollArea
          offsetScrollbars
          h="calc(100dvh - var(--app-shell-header-height) - var(--app-shell-footer-height, 0px) - var(--mantine-spacing-xl) * 2)"
        >
          <Stack>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Stack>
        </ScrollArea>
      ) : (
        <SimpleGrid cols={4}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </SimpleGrid>
      )}
    </>
  );
};

export default ProductCollection;
