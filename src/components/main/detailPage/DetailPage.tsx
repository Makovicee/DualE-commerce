import { Alert, Center, Stack } from "@mantine/core";
import ProductShowCase from "./productShowCase/ProductShowCase";
import Recommended from "./recommended/Recommended";
import BuyOptions from "./buyOptions/BuyOptions";
import { PRODUCTS } from "../../../core/data/products";
import { Navigate, useParams } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { useUIMode } from "../../../contexts/UIModeContext";

const DetailPage = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  const { mode } = useUIMode();

  //EFF mode nemá detail, přesměrovat na listing
  if (mode === "EFF") {
    return <Navigate to={`/listing/${product?.categoryId}`} replace />;
  }

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
      <ProductShowCase key={product.id} product={product} />
      <Recommended />
      <BuyOptions product={product} />
    </Stack>
  );
};

export default DetailPage;
