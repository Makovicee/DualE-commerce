import { Autocomplete, Kbd, Stack } from "@mantine/core";
import { Search } from "lucide-react";
import Categories from "./categories/Categories";
import PopularTagsGroup from "./popularTagsGroup/PopularTagsGroup";
import { useRef } from "react";
import { useHotkeys } from "@mantine/hooks";
import { useAutocompleteRender } from "./autocompleteRender/AutocompleteRender";
import { PRODUCTS } from "../../../../core/data/products";

const SearchTools = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const renderOption = useAutocompleteRender();
  useHotkeys([["mod+k", () => searchRef.current?.focus()]]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      searchRef.current?.blur();
    }
  };

  return (
    <Stack>
      <PopularTagsGroup />
      <Autocomplete
        ref={searchRef}
        onKeyDown={handleKeyDown}
        renderOption={renderOption}
        maxDropdownHeight={250}
        size="xl"
        data={PRODUCTS.map((p) => ({ value: p.id, label: p.name }))}
        placeholder="Hledat dle názvu"
        leftSection={<Search size={20} />}
        rightSection={<Kbd size={"lg"}>⌘ + K</Kbd>}
        rightSectionWidth={100}
      />
      <Categories />
    </Stack>
  );
};

export default SearchTools;
