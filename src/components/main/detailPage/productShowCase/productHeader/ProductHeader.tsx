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

const ProductHeader = () => {
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
        src={null}
        fallbackSrc="https://placehold.co/350x350"
        h={350}
        w={350}
        radius="50%"
        pos="absolute"
        top="50%"
        left="50%"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      <Group h="100%" align="center" justify="space-between" pos="relative">
        <Stack gap="sm">
          <StatItem icon={Droplets} label="Vysoce náročná na vodu" />
          <StatItem icon={Sun} label="Náročná na slunce" />
          <StatItem icon={Radiation} label="Radioaktivní materiál" />
        </Stack>

        <Text c="white" pr={"xl"} fw={600} fs="italic" ta="center" w="30%">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Lorem ipsum
          dolor sit amet, consectetue sit amet, consectetue
        </Text>
      </Group>

      <Center pos="absolute" bottom={16} w="100%" style={{ zIndex: 1 }}>
        <Stack align="center" gap="xs">
          <Title order={3}>Název Položky</Title>
          <ActionIcon radius="md" color="grape" size="input-sm">
            <ChevronDown size={22} />
          </ActionIcon>
        </Stack>
      </Center>
    </Box>
  );
};

export default ProductHeader;
