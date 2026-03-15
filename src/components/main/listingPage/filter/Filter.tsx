import { Group, Stack, Title, Text } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import FilterOverlay from "./filterOverlay/FilterOverlay";
import FilterBox from "./filterBox/FilterBox";

const Filter = () => {
  const { mode } = useUIMode();
  return (
    <>
      {mode === "EFF" ? (
        <FilterBox />
      ) : (
        <Group justify="space-between">
          <Stack gap={"xs"} w={"35%"}>
            <Title order={1} fs="italic" fw={500}>
              Kolekce
            </Title>
            <Text c={"dimmed"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              nemo incidunt recusandae voluptatem sit consectetur optio itaque
              ipsam suscipit error, commodi placeat harum autem enim fuga
              quibusdam tenetur. Facilis, ab!
            </Text>
          </Stack>
          <FilterOverlay />
        </Group>
      )}
    </>
  );
};

export default Filter;
