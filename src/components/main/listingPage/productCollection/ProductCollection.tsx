import { Center, Grid, ScrollArea, Stack, Text } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import ProductCard from "./productCard/ProductCard";
import type { Product } from "../../../../core/data/products";

interface ProductCollectionProps {
  products: Product[];
}

const ProductCollection = ({ products }: ProductCollectionProps) => {
  const { mode } = useUIMode();

  const getASTLayout = (index: number) => {
    const patterns = [
      { span: 6, h: 450 },
      { span: 3, h: 450 },
      { span: 3, h: 450 },
      { span: 4, h: 350 },
      { span: 8, h: 350 },
      { span: 12, h: 500 },
    ];
    return patterns[index % patterns.length];
  };

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
        <Grid gutter="md">
          {products.map((product, index) => {
            const layout = getASTLayout(index);
            return (
              <Grid.Col key={product.id} span={layout.span}>
                <ProductCard
                  product={product}
                  height={layout.h}
                  index={index}
                />
              </Grid.Col>
            );
          })}
        </Grid>
      )}
    </>
  );
};

export default ProductCollection;
