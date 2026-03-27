import { Center } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import DebitCard from "./debitCard/DebitCard";
import PaymentInfo from "./paymentInfo/PaymentInfo";
import type { CheckoutFormProps } from "../../../../core/logic/useCheckoutForm";

const Payment = ({ form }: CheckoutFormProps) => {
  const { mode } = useUIMode();

  return mode === "EFF" ? (
    <PaymentInfo form={form} />
  ) : (
    <Center>
      <DebitCard form={form} />
    </Center>
  );
};

export default Payment;
