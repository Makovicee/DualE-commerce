import { Center, Stack, Grid, Image, ActionIcon, Text } from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import SearchTools from "./searchTools/SearchTools";

import NewArrivals from "./specialOffers/NewArrivals";
import ProductOfTheWeek from "./specialOffers/ProductOfTheWeek";
import SpecialOffer from "./specialOffers/SpecialOffer";
import { Flower } from "lucide-react";

const HomePage = () => {
  const { mode } = useUIMode();
  const items = [<SpecialOffer />, <ProductOfTheWeek />, <NewArrivals />];
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
        <Stack w={"50%"} gap={"xl"}>
          {mode === "EFF" ? (
            <>
              <SearchTools />
              <Grid gutter="md">
                <Grid.Col span={6}>{items[0]}</Grid.Col>
                <Grid.Col span={6}>
                  <Stack gap="md" h="100%">
                    {items[1]}
                    {items[2]}
                  </Stack>
                </Grid.Col>
              </Grid>
            </>
          ) : (
            items
          )}
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
