import {
  ActionIcon,
  Box,
  Center,
  Group,
  Stack,
  Title,
  Text,
  Image,
} from "@mantine/core";
import { Droplets, Sun, Radiation, ChevronDown } from "lucide-react";
import StatItem from "./StatItem";
import type { Product } from "../../../../../core/data/products";
import { getStatLabels } from "../../../../../core/logic/getStatLabels";

const ProductHeader = ({ product }: { product: Product }) => {
  return (
    <Box h="calc(100dvh - var(--app-shell-header-height))" pos="relative">
      <Box
        bg="astGreen.3"
        h="100%"
        w="50%"
        pos="absolute"
        right={0}
        style={{
          borderTopLeftRadius: "var(--mantine-radius-lg)",
          borderBottomLeftRadius: "var(--mantine-radius-lg)",
        }}
      />
      <Image
        src={product.img}
        fallbackSrc="https://placehold.co/350x350"
        h={500}
        w={500}
        radius="50%"
        pos="absolute"
        top="50%"
        left="50%"
        style={{
          transform: "translate(-50%, -50%)",
          animation: "heroEntrance 2000ms ease",
        }}
      />

      <Group h="100%" align="center" justify="space-between" pos="relative">
        <Stack gap="sm">
          <StatItem
            color="astGreen.8"
            icon={Droplets}
            label={getStatLabels({
              statName: "Hydratace",
              statScore: product.stats.Hydratace,
            })}
          />
          <StatItem
            color="astGreen.6"
            icon={Sun}
            label={getStatLabels({
              statName: "Světlo",
              statScore: product.stats.Světlo,
            })}
          />
          <StatItem
            color="astGreen.4"
            icon={Radiation}
            label={getStatLabels({
              statName: "Toxicita",
              statScore: product.stats.Toxicita,
            })}
          />
        </Stack>

        <Text c="white" pr={"xl"} fw={600} fs="italic" ta="center" w="30%">
          "{product.comments?.[0]?.content}"
        </Text>
      </Group>

      <Center pos="absolute" bottom={16} w="100%" style={{ zIndex: 1 }}>
        <Stack align="center" gap="xs">
          <Title order={3}>{product.name}</Title>
          <ActionIcon radius="md" color="grape" size="input-sm">
            <ChevronDown size={22} />
          </ActionIcon>
        </Stack>
      </Center>
    </Box>
  );
};

export default ProductHeader;
