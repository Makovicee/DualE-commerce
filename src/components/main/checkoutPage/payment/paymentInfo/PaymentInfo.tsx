import { Group, Stack, TextInput } from "@mantine/core";
import type { CheckoutFormProps } from "../../../../../core/logic/useCheckoutForm";

const PaymentInfo = ({ form }: CheckoutFormProps) => {
  return (
    <Stack>
      <TextInput
        withAsterisk
        label="Karta"
        placeholder="1234 5678 9012 3456"
        {...form.getInputProps("cardNumber")}
      />
      <Group grow>
        <TextInput placeholder="MM/YY" {...form.getInputProps("cardExpiry")} />
        <TextInput placeholder="CVC" {...form.getInputProps("cardCVC")} />
      </Group>
      <TextInput
        placeholder="Jméno příjmení"
        {...form.getInputProps("cardName")}
      />
    </Stack>
  );
};

export default PaymentInfo;
