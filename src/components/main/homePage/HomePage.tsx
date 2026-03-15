import { Center, Stack, Image, ActionIcon, Text } from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import SearchTools from "./searchTools/SearchTools";

import { Flower } from "lucide-react";
import SpecialOffers from "./specialOffers/SpecialOffers";

const HomePage = () => {
  const { mode } = useUIMode();
  return (
    <>
      {mode === "AST" && (
        <Image
          src={null}
          fallbackSrc="https://placehold.co/1920x800"
          mah={700}
          fit="cover"
          mb={"xl"}
        />
      )}
      <Center flex={1}>
        <Stack w="50%" gap="xl">
          {mode === "EFF" && <SearchTools />}
          <SpecialOffers />
        </Stack>
      </Center>
      {mode === "AST" && (
        <Stack my="xl" align="center" justify="center" gap={0}>
          <ActionIcon variant="transparent" size={"input-xl"}>
            <Flower size={40} />
          </ActionIcon>
          <Text fw={"bold"} ta={"center"}>
            Odhalit více
          </Text>
        </Stack>
      )}
    </>
  );
};

export default HomePage;
