import { Chip, Divider, Group, Select, Stack, Text } from "@mantine/core";

const FILTERS = ["Hydratace", "Světlo", "Toxicita"];

const FilterBox = () => {
  return (
    <Stack>
      <Select
        label="Řadit dle"
        defaultValue="Doporučeno"
        data={["Doporučeno", "Nejnovější"]}
      />
      <Divider />
      {FILTERS.map((filter) => (
        <Stack gap={"sm"}>
          <Text c={"dimmed"} key={filter} fw={500} size="sm">
            {filter}
          </Text>
          <Chip.Group key={filter}>
            <Group gap="sm" wrap="wrap">
              <Chip value="low">Nízká</Chip>
              <Chip value="medium">Střední</Chip>
              <Chip value="high">Vysoká</Chip>
            </Group>
          </Chip.Group>
        </Stack>
      ))}
    </Stack>
  );
};

export default FilterBox;
