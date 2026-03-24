import { Group, Title } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import FilterOverlay from "./filterOverlay/FilterOverlay";
import FilterBox from "./filterBox/FilterBox";
import type { FilterControlProps } from "../../../../core/logic/useProductFilter";
import { CATEGORIES } from "../../../../core/data/categories";
import { useParams } from "react-router-dom";
import { Component } from "lucide-react";

const Filter = ({
  filters,
  setStatFilter,
  setOnSortBy,
}: FilterControlProps) => {
  const { mode } = useUIMode();
  const { category } = useParams<{ category: string }>();

  const currentCategory = CATEGORIES.find((c) => c.id === category);
  const CategoryIcon = currentCategory ? currentCategory.icon : Component;
  const categoryLabel = currentCategory
    ? currentCategory.labels[mode]
    : "Všechny produkty";

  return (
    <>
      {mode === "EFF" ? (
        <FilterBox
          filters={filters}
          setStatFilter={setStatFilter}
          setOnSortBy={setOnSortBy}
        />
      ) : (
        <Group justify="space-between">
          <Group align="center" gap={"xs"} py={"xl"} w={"50%"}>
            <CategoryIcon color="var(--mantine-color-grape-6)" size={42} />
            <Title order={1} fs="italic" fw={500}>
              {categoryLabel}
            </Title>
          </Group>
          <FilterOverlay
            filters={filters}
            setStatFilter={setStatFilter}
            setOnSortBy={setOnSortBy}
          />
        </Group>
      )}
    </>
  );
};

export default Filter;
