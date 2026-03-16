import { Center, Group, Radio, Stack, Text } from "@mantine/core";
import { Sprout } from "lucide-react";

const VariantOption = ({ value }: { value: string }) => {
  return (
    <Radio.Card radius="md" value={value} p="sm">
      <Stack gap={"xs"}>
        <Group justify="space-between" align="flex-start">
          <Stack gap={0}>
            <Text fw={600}>Standardní</Text>
            <Text size="sm" c="dimmed">
              12 cm
            </Text>
            <Text size="sm" c="teal" fs="italic">
              Skladem
            </Text>
          </Stack>
          <Radio.Indicator />
        </Group>

        <Center>
          <Sprout size={40} />
        </Center>

        <Text ta="right" size="sm" c="dimmed" fw={500}>
          +0 Kč
        </Text>
      </Stack>
    </Radio.Card>
  );
};

export default VariantOption;
