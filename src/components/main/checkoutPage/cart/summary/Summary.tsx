import { Divider, Group, Stack, Text } from "@mantine/core";

const ROWS = [
  { label: "Mezisoučet", value: "1293 Kč" },
  { label: "Daň", value: "+119 Kč" },
  { label: "Doprava", value: "Zdarma", color: "teal" },
];

const Summary = () => {
  return (
    <Stack>
      {ROWS.map(({ label, value, color }) => (
        <Group key={label} justify="space-between">
          <Text fw={500} c="dimmed">
            {label}
          </Text>
          <Text fw={500} c={color}>
            {value}
          </Text>
        </Group>
      ))}
      <Divider />
      <Group justify="space-between">
        <Text fw={500} c="dimmed">
          Celkem
        </Text>
        <Text fw={500}>1500 Kč</Text>
      </Group>
    </Stack>
  );
};

export default Summary;
