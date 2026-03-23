import { Box, Group, Stack } from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import Filter from "./filter/Filter";
import ProductCollection from "./productCollection/ProductCollection";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import type { CategoryId } from "../../../core/data/categories";
import { useProductFilter } from "../../../core/logic/useProductFilter";
import { useEffect, useRef } from "react";

const ListingPage = () => {
  const { mode } = useUIMode();
  const { category } = useParams<{ category: CategoryId }>();
  const { state } = useLocation();
  const navigate = useNavigate();
  const prevMode = useRef(mode);

  //vynutit odstranění highlightedID při změně módu, protože AST mode by to neměl využívat (ten má detail)
  useEffect(() => {
    if (prevMode.current !== mode && state?.highlightId) {
      navigate(".", { replace: true, state: null });
    }
    prevMode.current = mode;
  }, [mode, navigate, state?.highlightId]);

  const { filters, setStatFilter, setSortBy, filteredProducts } =
    useProductFilter(category);

  const displayedProducts = state?.highlightId
    ? filteredProducts.filter((p) => p.id === state.highlightId)
    : filteredProducts;

  const productCollection = <ProductCollection products={displayedProducts} />;
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
