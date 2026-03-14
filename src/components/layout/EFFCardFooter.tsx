import { ActionIcon, Button, Divider, Group, Stack, Text } from "@mantine/core";
import { ArrowRight, Redo2, Trash2, Undo2 } from "lucide-react";

const EFFCardFooter = () => {
  return (
    <Group justify="space-between" pl={"xl"} h="100%" align="stretch" gap="xl">
      <Group align="center">
        <Stack gap={4}>
          <Text c="dimmed">Celkem položek</Text>
          <Text fw="bold">X kusů</Text>
        </Stack>
        <Divider my={"xl"} orientation="vertical" />
        <Stack gap={4}>
          <Text c="dimmed">Součet</Text>
          <Text fw="bold">X Kč</Text>
        </Stack>
      </Group>

      <Group gap="xl" align="center">
        <ActionIcon color="red" size="input-md" variant="light">
          <Trash2 size={20} />
        </ActionIcon>
        <Divider my={"xl"} orientation="vertical" />
        <Stack align="center" gap={2}>
          <ActionIcon size="input-xs" variant="light">
            <Undo2 size={20} />
          </ActionIcon>
          <Text c="dimmed" size="xs">
            ⌘ + Z
          </Text>
        </Stack>
        <Stack align="center" gap={2}>
          <ActionIcon size="input-xs" variant="light">
            <Redo2 size={20} />
          </ActionIcon>
          <Text c="dimmed" size="xs">
            ⌘ + Y
          </Text>
        </Stack>
        <Button ml={"xl"} radius={0} h="100%" fw={"bold"} size="lg">
          <Group gap={"xs"}>
            Pokračovat k platbě
            <ArrowRight />
          </Group>
        </Button>
      </Group>
    </Group>
  );
};

export default EFFCardFooter;
