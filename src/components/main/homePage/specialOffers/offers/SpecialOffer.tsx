import { Carousel } from "@mantine/carousel";
import { Badge, Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import { Eye } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import {
  formatTime,
  useActionTimer,
} from "../../../../../core/logic/useActionTimer";
import { PRODUCTS } from "../../../../../core/data/products";
import { useNavigate } from "react-router-dom";

const SpecialOffer = () => {
  const { mode } = useUIMode();
  const navigate = useNavigate();
  const timer = useActionTimer(12 * 60 * 60);

  const discountedProducts = PRODUCTS.filter((product) => product.discount);
  const SLIDE_PRODUCTS = discountedProducts.slice(0, 5);

  const actionTimer = (
    <Text c="dimmed" size="sm">
      Končí za: {formatTime(timer)}
    </Text>
  );

  return (
    <Paper h={"100%"} p={0}>
      {mode === "EFF" ? (
        <Group
          style={{ cursor: "pointer" }}
          h="100%"
          justify="space-evenly"
          wrap="nowrap"
          onClick={() => navigate("/listing?sort=discounted")}
        >
          <Stack gap="xs">
            <Badge color="indigo">Akce</Badge>
            <Title order={2}>Zlevněné rostliny až 50%</Title>
            {actionTimer}
          </Stack>
          <Group>
            <Image
              src={discountedProducts[0].img}
              fallbackSrc="https://placehold.co/130x130"
              h={115}
              w={115}
            />
          </Group>
        </Group>
      ) : (
        <Stack>
          <Group gap="xs" align="center">
            <Title order={2}>Akční kolekce</Title>
            <Text c="dimmed">- Sezonní výběr se zvýhodněním</Text>
          </Group>

          <Carousel slideSize={210} slideGap="md" withControls={true}>
            {SLIDE_PRODUCTS.map((product) => (
              <Carousel.Slide key={product.id}>
                <Image
                  src={product.img}
                  fallbackSrc="https://placehold.co/200x200"
                  h={250}
                  w={250}
                  fit="cover"
                />
              </Carousel.Slide>
            ))}
            <Carousel.Slide>
              <Paper
                h={250}
                w={250}
                bg="astGreen.3"
                style={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => navigate("/listing?sort=discounted")}
              >
                <Stack gap="xs" align="center" c={"white"}>
                  <Eye size={28} />
                  <Text fw={500}>Objevit další</Text>
                </Stack>
              </Paper>
            </Carousel.Slide>
          </Carousel>
          {actionTimer}
        </Stack>
      )}
    </Paper>
  );
};

export default SpecialOffer;
