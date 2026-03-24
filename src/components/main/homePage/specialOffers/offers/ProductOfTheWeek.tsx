import {
  Box,
  Button,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { PRODUCTS } from "../../../../../core/data/products";
import { useNavigate } from "react-router-dom";
import ProductInfo from "../../../listingPage/productCollection/productCard/ProductInfo";

const ProductOfTheWeek = () => {
  const { mode } = useUIMode();
  const navigate = useNavigate();
  const product = PRODUCTS.find((product) => product.id === "RZ01");

  const image = (
    <Image
      src={product?.img}
      fallbackSrc="https://placehold.co/100x100"
      h={mode === "EFF" ? 100 : "100%"}
      w={mode === "EFF" ? 100 : "100%"}
    />
  );

  const title = <Title order={2}>{product?.name}</Title>;
  const label = (
    <Text fw={500} c={mode === "EFF" ? "dimmed" : "astGreen.5"}>
      Produkt týdne
    </Text>
  );

  return (
    <Paper>
      {mode === "EFF" ? (
        <Box
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/listing/${product?.categoryId}`, {
              state: { highlightId: product?.id },
            })
          }
        >
          <Group justify="space-between">
            <Group>
              {image}
              <Stack gap="xs">
                {title}
                <Group>{label}</Group>
              </Stack>
            </Group>
            <ProductInfo product={product!} />
          </Group>
        </Box>
      ) : (
        <Stack>
          <Group justify="space-between">
            <Stack gap={0}>
              {label}
              {title}
            </Stack>
          </Group>
          <Group my="xl" wrap="nowrap" w={"50vw"}>
            {image}
            <Stack>
              <Text lineClamp={10}>{product?.description}</Text>
              <Button onClick={() => navigate(`/detail/${product?.id}`)}>
                Nahlédnout
              </Button>
            </Stack>
          </Group>
        </Stack>
      )}
    </Paper>
  );
};

export default ProductOfTheWeek;
