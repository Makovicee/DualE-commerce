import {
  ActionIcon,
  Box,
  Button,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ArrowRight, Zap } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { PRODUCTS } from "../../../../../core/data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const { mode } = useUIMode();
  const navigate = useNavigate();
  const newestProducts = [...PRODUCTS]
    .sort((a, b) => b.launchDate.getTime() - a.launchDate.getTime())
    .slice(0, 3);
  const [selected, setSelected] = useState(newestProducts[0]);

  const title = (
    <Title order={2}>
      {mode === "EFF" ? (
        <Group gap="xs">
          Novinky <Zap size={20} fill="orange" color="orange" />
        </Group>
      ) : (
        "Nové přírůstky"
      )}
    </Title>
  );

  const arrowButton = (
    <ActionIcon
      h={"100%"}
      color="gray"
      variant={mode === "EFF" ? "light" : "transparent"}
      size={"input-xl"}
      onClick={() => navigate("/listing?sort=newest")}
      c="dimmed"
    >
      <ArrowRight size={22} />
    </ActionIcon>
  );

  return (
    <Paper>
      {mode === "EFF" ? (
        <Group justify="space-between">
          <Stack gap={4}>
            {title}
            <Text c="dimmed" size="sm">
              10+ nových květin
            </Text>
          </Stack>
          {arrowButton}
        </Group>
      ) : (
        <Stack align="center">
          <Group gap="xs" align="center">
            {title}
            {arrowButton}
          </Group>
          <SimpleGrid cols={3} mt="lg" w="100%">
            {newestProducts.map((product) => (
              <Box
                style={{
                  cursor: "pointer",
                  borderRadius: "var(--mantine-radius-lg)",
                  backgroundColor:
                    selected.id === product.id
                      ? "rgba(210, 237, 198, 0.5)"
                      : "",
                  transition: "background-color 0.5s ease",
                }}
                onClick={() => setSelected(product)}
              >
                <Image
                  key={product.id}
                  src={product.img}
                  fallbackSrc="https://placehold.co/200x400"
                  h={300}
                />
              </Box>
            ))}
          </SimpleGrid>
          <Stack align="center" mt="lg" maw={440}>
            <Title order={3} ta="center" td={"underline"} c={"astGreen.4"}>
              {selected.name}
            </Title>
            <Text ta="center" c="dimmed">
              {selected.description}
            </Text>
            <Button mt="sm" onClick={() => navigate(`/detail/${selected.id}`)}>
              Nahlédnout
            </Button>
          </Stack>
        </Stack>
      )}
    </Paper>
  );
};

export default NewArrivals;
