import {
  ActionIcon,
  Box,
  Divider,
  Grid,
  Group,
  HoverCard,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { Info } from "lucide-react";
import type { Product } from "../../../../../core/data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <HoverCard position="left" width={750} transitionProps={{ duration: 0 }}>
      <HoverCard.Target>
        <ActionIcon h={"100%"} color="gray" variant="light" size={"input-xl"}>
          <Info size={22} />
        </ActionIcon>
      </HoverCard.Target>
      <HoverCard.Dropdown p={"xl"}>
        <Group justify="space-between">
          <Stack w="60%">
            {Object.entries(product.stats).map(([stat, value]) => (
              <Grid key={stat} align="center">
                <Grid.Col span={4}>
                  <Text fw={500} c="black">
                    {stat}{" "}
                    <Text span c="dimmed" fw={600}>
                      ({value})
                    </Text>
                  </Text>
                </Grid.Col>
                <Grid.Col span={7}>
                  <Group gap={"sm"}>
                    {[1, 2, 3].map((i) => (
                      <Box
                        key={i}
                        h={12}
                        flex={1}
                        bg={i <= value ? "dark" : "gray.3"}
                        style={{ borderRadius: "var(--mantine-radius-xs)" }}
                      />
                    ))}
                  </Group>
                </Grid.Col>
              </Grid>
            ))}
          </Stack>

          <Stack>
            <Rating value={product.rating} fractions={2} readOnly size="lg" />
            <Text>{product.rating} / 5</Text>
          </Stack>
        </Group>
        <Divider my={"sm"} />
        <Text c={"dimmed"}>{product.description}</Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default ProductInfo;
