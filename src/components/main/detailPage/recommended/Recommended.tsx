import { Center, Paper, SimpleGrid, Stack, Title } from "@mantine/core";
import ProductCard from "../../listingPage/productCollection/productCard/ProductCard";

const Recommended = () => {
  return (
    <Center>
      <Paper w={"75%"} bg={"astGreen.2"}>
        <Stack gap={"xl"}>
          <Title ta={"center"} c={"white"} order={3}>
            Mohlo by se vám líbit
          </Title>

          <SimpleGrid cols={3}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </SimpleGrid>
        </Stack>
      </Paper>
    </Center>
  );
};

export default Recommended;
