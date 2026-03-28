import { Grid, Stack } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import NewArrivals from "./offers/NewArrivals";
import ProductOfTheWeek from "./offers/ProductOfTheWeek";
import SpecialOffer from "./offers/SpecialOffer";

const SpecialOffers = () => {
  const { mode } = useUIMode();

  const specialOffer = <SpecialOffer />;
  const productOfTheWeek = <ProductOfTheWeek />;
  const newArrivals = <NewArrivals />;

  if (mode === "EFF") {
    return (
      <Grid gutter="md">
        <Grid.Col span={6}>{specialOffer}</Grid.Col>
        <Grid.Col span={6}>
          <Stack gap="md" h="100%">
            {productOfTheWeek}
            {newArrivals}
          </Stack>
        </Grid.Col>
      </Grid>
    );
  }

  return (
    <>
      {specialOffer}
      {productOfTheWeek}
      {newArrivals}
    </>
  );
};

export default SpecialOffers;
