import {
  ActionIcon,
  Group,
  Image,
  NumberInput,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { X } from "lucide-react";

const ItemCard = () => {
  return (
    <Paper p={"xs"}>
      <Stack>
        <Group justify="space-between">
          <Group gap="xs">
            <Text size="xl" fw={600}>
              Název Položky
            </Text>
            <Text c="dimmed">- Extra</Text>
          </Group>
          <Group gap={"xs"}>
            <NumberInput
              defaultValue={1}
              min={1}
              styles={{ input: { textAlign: "center" } }}
              w={100}
            />
            <ActionIcon variant="transparent" color="red">
              <X size={20} />
            </ActionIcon>
          </Group>
        </Group>

        <Image
          src={null}
          fallbackSrc="https://placehold.co/400x300"
          radius="md"
        />
      </Stack>
    </Paper>
  );
};

export default ItemCard;
