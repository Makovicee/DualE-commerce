import { Kbd, Stack, TextInput } from "@mantine/core";
import { Search } from "lucide-react";
import Categories from "./categories/Categories";
import PopularTagsGroup from "./popularTagsGroup/PopularTagsGroup";
import { useRef } from "react";
import { useHotkeys } from "@mantine/hooks";

const SearchTools = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  useHotkeys([["mod+k", () => searchRef.current?.focus()]]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      searchRef.current?.blur();
    }
  };

  return (
    <Stack>
      <PopularTagsGroup />
      <TextInput
        ref={searchRef}
        onKeyDown={handleKeyDown}
        variant="filled"
        size="xl"
        placeholder="Hledat dle ID, Názvu, Popisu"
        leftSection={<Search size={20} />}
        rightSection={<Kbd size={"lg"}>⌘ + K</Kbd>}
        rightSectionWidth={100}
      />
      <Categories />
    </Stack>
  );
};

export default SearchTools;
