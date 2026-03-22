import { Center, Paper, SimpleGrid, Stack, Title } from "@mantine/core";
import ProductCard from "../../listingPage/productCollection/productCard/ProductCard";
import { getRecommended } from "../../../../core/logic/getRecommended";
import { useParams } from "react-router-dom";

const Recommended = () => {
  const { id } = useParams();
  const recommendedProducts = getRecommended(3, id);

  return (
    <Center>
      <Paper w={"75%"} bg={"astGreen.2"}>
        <Stack gap={"xl"}>
          <Title ta={"center"} c={"white"} order={3}>
            Mohlo by se vám líbit
          </Title>

          <SimpleGrid cols={3}>
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </SimpleGrid>
        </Stack>
      </Paper>
    </Center>
  );
};

export default Recommended;
