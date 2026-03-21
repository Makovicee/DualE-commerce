import { Chip, Divider, Group, Select, Stack, Text } from "@mantine/core";
import type {
  FilterControlProps,
  SortBy,
} from "../../../../../core/logic/useProductFilter";
import { STAT_NAMES, type StatValue } from "../../../../../core/data/products";

const FilterBox = ({
  filters,
  setStatFilter,
  setOnSortBy,
}: FilterControlProps) => {
  return (
    <Stack>
      <Select
        label="Řadit dle"
        value={filters.sortBy}
        onChange={(v) => setOnSortBy(v as SortBy)}
        data={[
          { value: "price_asc", label: "Cena vzestupně" },
          { value: "price_desc", label: "Cena sestupně" },
        ]}
        clearable
      />
      <Divider />
      {STAT_NAMES.map((stat) => (
        <Stack gap="sm" key={stat}>
          <Text c="dimmed" fw={500} size="sm">
            {stat}
          </Text>
          <Chip.Group
            multiple
            value={filters[stat] ? [String(filters[stat])] : []}
            onChange={(value) =>
              setStatFilter(
                stat,
                value.length
                  ? (Number(value[value.length - 1]) as StatValue)
                  : null,
              )
            }
          >
            <Group gap="sm">
              <Chip value="1">Nízká</Chip>
              <Chip value="2">Střední</Chip>
              <Chip value="3">Vysoká</Chip>
            </Group>
          </Chip.Group>
        </Stack>
      ))}
    </Stack>
  );
};

export default FilterBox;
