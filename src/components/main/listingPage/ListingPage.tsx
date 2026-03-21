import { Box, Group, Stack } from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import Filter from "./filter/Filter";
import ProductCollection from "./productCollection/ProductCollection";
import { useParams } from "react-router-dom";
import type { CategoryId } from "../../../core/data/categories";
import { useProductFilter } from "../../../core/logic/useProductFilter";

const ListingPage = () => {
  const { mode } = useUIMode();
  const { category } = useParams<{ category: CategoryId }>();

  const { filters, setStatFilter, setSortBy, filteredProducts } =
    useProductFilter(category);

  const productCollection = <ProductCollection products={filteredProducts} />;
  const filter = (
    <Filter
      filters={filters}
      setStatFilter={setStatFilter}
      setOnSortBy={setSortBy}
    />
  );

  return (
    <Box p="xl">
      {mode === "EFF" ? (
        <Group align="flex-start" gap="md" wrap="nowrap">
          <Box w="15%">{filter}</Box>
          <Box flex={1}>{productCollection}</Box>
        </Group>
      ) : (
        <Stack>
          {filter}
          {productCollection}
        </Stack>
      )}
    </Box>
  );
};
export default ListingPage;
