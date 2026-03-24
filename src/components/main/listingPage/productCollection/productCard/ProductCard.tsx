import {
  Badge,
  Card,
  Grid,
  Group,
  Image,
  NumberInput,
  Paper,
  Rating,
  Stack,
  Text,
  Transition,
} from "@mantine/core";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { useHover } from "@mantine/hooks";
import ProductInfo from "./ProductInfo";
import type { Product } from "../../../../../core/data/products";
import { useNavigate } from "react-router-dom";
import { BadgePercent } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { mode } = useUIMode();
  const { hovered, ref } = useHover();
  const navigate = useNavigate();

  const image = (
    <Image
      src={product.img}
      fallbackSrc="https://placehold.co/200x200"
      h={mode === "EFF" ? 64 : "100%"}
      w={mode === "EFF" ? 64 : "100%"}
    />
  );

  const title = (
    <Text size="lg" fw={500}>
      {product.name}
    </Text>
  );

  const ratingStars = (
    <Rating value={product.rating} fractions={2} readOnly size="sm" />
  );

  //EFF specific
  const totalStock = Object.values(product.variants).reduce(
    (acc, v) => acc + v.stock,
    0,
  );
  const [stockStatus, stockColor] =
    totalStock === 0
      ? ["Vyprodáno", "red"]
      : totalStock < 30
        ? ["Nízká zásoba", "yellow"]
        : ["Vysoká zásoba", "green"];
  const stockCounts = Object.values(product.variants)
    .map((v) => v.stock)
    .join(" / ");

  return (
    <Card p={mode === "AST" ? 0 : "md"}>
      {mode === "EFF" ? (
        <Grid align="center">
          <Grid.Col span={2}>
            <Group wrap="nowrap" gap="xl">
              {image}
              <Stack gap={0}>
                <Group>
                  <Text size="xs" c="dimmed">
                    {product.id}
                  </Text>
                  {product.discount && (
                    <Badge color="indigo" variant="light">
                      -{product.discount * 100} %
                    </Badge>
                  )}
                </Group>
                {title}
                {ratingStars}
              </Stack>
            </Group>
          </Grid.Col>
          <Grid.Col span={3}>
            <Stack gap="xs" align="center">
              <Badge color={stockColor} variant="light">
                {stockStatus}
              </Badge>
              <Text ta="center" size="xs" c="dimmed">
                {stockCounts}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={7}>
            <Group gap="xl" wrap="nowrap" justify="flex-end">
              {Object.values(product.variants).map((variant) => (
                <NumberInput
                  fw={500}
                  styles={{ input: { textAlign: "center" } }}
                  stepHoldDelay={500}
                  stepHoldInterval={100}
                  suffix=" ks"
                  size="sm"
                  disabled={variant.stock === 0}
                  allowDecimal={false}
                  allowNegative={false}
                  defaultValue={0}
                  min={0}
                  labelProps={{ style: { width: "100%" } }}
                  label={
                    <Group
                      c={variant.stock === 0 ? "dimmed" : "black"}
                      w="100%"
                      justify="space-between"
                    >
                      <Text fw={500}>
                        {variant.size}{" "}
                        <Text size="xs" span c="dimmed">
                          ({variant.sizeLabel})
                        </Text>
                      </Text>
                      {(variant.price * (1 - (product.discount ?? 0))).toFixed(
                        2,
                      )}{" "}
                      Kč
                    </Group>
                  }
                />
              ))}

              <ProductInfo product={product} />
            </Group>
          </Grid.Col>
        </Grid>
      ) : (
        <Stack
          gap="xs"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate(`/detail/${product.id}`);
          }}
        >
          <div ref={ref} style={{ position: "relative" }}>
            {image}
            {product?.discount && (
              <Badge
                p={"xs"}
                h={75}
                color="grape"
                pos="absolute"
                top={16}
                right={16}
              >
                <Stack gap={"xs"}>
                  <Text size="xs" fw={500}>
                    {product.discount * 100}
                  </Text>
                  <BadgePercent size={20} />
                </Stack>
              </Badge>
            )}

            <Transition mounted={hovered} transition="fade" duration={1000}>
              {(styles) => (
                <Paper
                  withBorder
                  pos="absolute"
                  bottom={0}
                  w="100%"
                  style={{
                    ...styles,
                    borderRadius:
                      "0 0 var(--mantine-radius-md) var(--mantine-radius-md)",
                    background: "rgba(255, 255, 255)",
                  }}
                  p="xs"
                >
                  <Group justify="space-between">
                    <Stack gap="xs">
                      {title}
                      {ratingStars}
                    </Stack>
                    <Stack gap={0}>
                      <Text c="dimmed" size="sm">
                        Od
                      </Text>
                      <Text fw={700}>
                        {Math.ceil(
                          Math.min(
                            ...Object.values(product.variants).map(
                              (v) => v.price * (1 - (product.discount ?? 0)),
                            ),
                          ),
                        )}{" "}
                        Kč
                      </Text>
                    </Stack>
                  </Group>
                </Paper>
              )}
            </Transition>
          </div>
        </Stack>
      )}
    </Card>
  );
};

export default ProductCard;
