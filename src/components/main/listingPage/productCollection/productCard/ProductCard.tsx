import {
  Badge,
  Card,
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

const ProductCard = () => {
  const { mode } = useUIMode();
  const { hovered, ref } = useHover();

  const image = (
    <Image
      src={null}
      fallbackSrc="https://placehold.co/200x200"
      h={mode === "EFF" ? 64 : "100%"}
      w={mode === "EFF" ? 64 : "100%"}
    />
  );

  const title = (
    <Text size="lg" fw={500}>
      Cactus Inabae
    </Text>
  );

  const priceLabel = (
    <Text size="sm" fw={700}>
      75.00 Kč
    </Text>
  );

  const ratingStars = <Rating value={3.5} fractions={2} readOnly size="sm" />;

  const effNumberInput = (
    <NumberInput
      fw={500}
      styles={{ input: { textAlign: "center" } }}
      stepHoldDelay={500}
      stepHoldInterval={100}
      suffix=" ks"
      size="sm"
      allowDecimal={false}
      allowNegative={false}
      defaultValue={0}
      min={0}
      labelProps={{ style: { width: "100%" } }}
      label={
        <Group w="100%" justify="space-between">
          <Text fw={500}>
            S{" "}
            <Text size="xs" span c="dimmed">
              (15cm)
            </Text>
          </Text>
          {priceLabel}
        </Group>
      }
    />
  );

  return (
    <Card p={mode === "AST" ? 0 : "md"}>
      {mode === "EFF" ? (
        <Group wrap="nowrap" justify="space-between">
          <Group wrap="nowrap" gap={"xl"} w={"35%"}>
            {image}
            <Stack gap={0}>
              <Text size="xs" c="dimmed">
                #012GR
              </Text>
              {title}
              {ratingStars}
            </Stack>
            <Stack gap={"xs"} ml={"10%"}>
              <Badge color="green" variant="light">
                Vysoká zásoba
              </Badge>
              <Text ta={"center"} size="xs" c="dimmed">
                0 / 0 / 0
              </Text>
            </Stack>
          </Group>

          <Group gap={"xl"} wrap="nowrap">
            {effNumberInput}
            {effNumberInput}
            {effNumberInput}
            <ProductInfo />
          </Group>
        </Group>
      ) : (
        <Stack gap="xs" style={{ cursor: "pointer" }}>
          <div ref={ref} style={{ position: "relative" }}>
            {image}
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
                      {priceLabel}
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
