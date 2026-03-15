import { Box, Group, Stack } from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import Filter from "./filter/Filter";
import ProductCollection from "./productCollection/ProductCollection";

const ListingPage = () => {
  const { mode } = useUIMode();

  return (
    <Box p="xl">
      {mode === "EFF" ? (
        <Group align="flex-start" gap="md" wrap="nowrap">
          <Box w="15%">
            <Filter />
          </Box>
          <Box flex={1}>
            <ProductCollection />
          </Box>
        </Group>
      ) : (
        <Stack>
          <Filter />
          <ProductCollection />
        </Stack>
      )}
    </Box>
  );
};
export default ListingPage;
