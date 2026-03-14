import { Kbd, Stack, TextInput } from "@mantine/core";
import { Search } from "lucide-react";
import Categories from "./categories/Categories";
import PopularTagsGroup from "./popularTagsGroup/PopularTagsGroup";

const SearchTools = () => {
  return (
    <Stack>
      <PopularTagsGroup />
      <TextInput
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
