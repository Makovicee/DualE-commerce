import { Alert, Center, Stack } from "@mantine/core";
import ProductShowCase from "./productShowCase/ProductShowCase";
import Recommended from "./recommended/Recommended";
import BuyOptions from "./buyOptions/BuyOptions";
import { PRODUCTS } from "../../../core/data/products";
import { useParams } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const DetailPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product)
    return (
      <Center>
        <Alert w={"50%"} icon={<AlertCircle />} color="red">
          Produkt nenalezen
        </Alert>
      </Center>
    );
  return (
    <Stack gap={"xl"} mb={"xl"}>
      <ProductShowCase product={product} />
      <Recommended />
      <BuyOptions product={product} />
    </Stack>
  );
};

export default DetailPage;
