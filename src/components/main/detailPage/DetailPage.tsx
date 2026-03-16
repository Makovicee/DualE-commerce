import { Stack } from "@mantine/core";
import ProductShowCase from "./productShowCase/ProductShowCase";
import Recommended from "./recommended/Recommended";
import BuyOptions from "./buyOptions/BuyOptions";

const DetailPage = () => {
  return (
    <Stack gap={"xl"} mb={"xl"}>
      <ProductShowCase />
      <Recommended />
      <BuyOptions />
    </Stack>
  );
};

export default DetailPage;
