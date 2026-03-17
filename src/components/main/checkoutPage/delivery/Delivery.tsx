import { Divider, Stack } from "@mantine/core";
import CustomerInfo from "./customerInfo/CustomerInfo";
import GiftOption from "./giftOption/GiftOption";
import Details from "./details/Details";
import { useUIMode } from "../../../../contexts/UIModeContext";

const Delivery = () => {
  const { mode } = useUIMode();

  return (
    <Stack gap="xl" px="md">
      <Details />
      {mode === "AST" && (
        <Divider
          orientation="vertical"
          color={"astGreen.6"}
          size={"sm"}
          h={300}
          mx={"auto"}
        />
      )}
      <CustomerInfo />
      {mode === "AST" && (
        <Divider
          orientation="vertical"
          color={"astGreen.8"}
          size={"sm"}
          mx={"auto"}
          h={300}
        />
      )}
      <GiftOption />
    </Stack>
  );
};

export default Delivery;
