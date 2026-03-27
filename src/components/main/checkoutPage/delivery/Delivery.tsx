import { Divider, Stack } from "@mantine/core";
import CustomerInfo from "./customerInfo/CustomerInfo";
import GiftOption from "./giftOption/GiftOption";
import Details from "./details/Details";
import { useUIMode } from "../../../../contexts/UIModeContext";
import type { CheckoutFormProps } from "../../../../core/logic/useCheckoutForm";

const Delivery = ({ form }: CheckoutFormProps) => {
  const { mode } = useUIMode();

  return (
    <Stack gap="xl" px="md">
      <Details form={form} />
      {mode === "AST" && (
        <Divider
          orientation="vertical"
          color={"astGreen.6"}
          size={"sm"}
          h={300}
          mx={"auto"}
        />
      )}
      <CustomerInfo form={form} />
      {mode === "AST" && (
        <Divider
          orientation="vertical"
          color={"astGreen.8"}
          size={"sm"}
          mx={"auto"}
          h={300}
        />
      )}
      <GiftOption form={form} />
    </Stack>
  );
};

export default Delivery;
