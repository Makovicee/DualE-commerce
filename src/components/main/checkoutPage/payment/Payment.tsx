import { Center } from "@mantine/core";
import { useUIMode } from "../../../../contexts/UIModeContext";
import DebitCard from "./debitCard/DebitCard";
import PaymentInfo from "./paymentInfo/PaymentInfo";

const Payment = () => {
  const { mode } = useUIMode();

  return mode === "EFF" ? (
    <PaymentInfo />
  ) : (
    <Center>
      <DebitCard />
    </Center>
  );
};

export default Payment;
