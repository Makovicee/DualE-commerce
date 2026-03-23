import { Center, ScrollArea, SimpleGrid, Stack, Text } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import ProductCard from "./productCard/ProductCard";
import type { Product } from "../../../../core/data/products";

interface ProductCollectionProps {
  products: Product[];
}

const ProductCollection = ({ products }: ProductCollectionProps) => {
  const { mode } = useUIMode();

  if (products.length === 0) {
    return (
      <Center h={200}>
        <Text c="dimmed" size="lg">
          Žadné produkty neodpovídají vašim kritériím.
        </Text>
      </Center>
    );
  }

  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      {mode === "EFF" ? (
        <ScrollArea
          offsetScrollbars
          h="calc(100dvh - var(--app-shell-header-height) - var(--app-shell-footer-height, 0px) - var(--mantine-spacing-xl) * 2)"
        >
          <Stack>{productCards}</Stack>
        </ScrollArea>
      ) : (
        <SimpleGrid cols={4}>{productCards}</SimpleGrid>
      )}
    </>
  );
};

export default ProductCollection;
