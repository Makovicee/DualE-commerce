import { Group, Stack, TextInput } from "@mantine/core";

const PaymentInfo = () => {
  return (
    <Stack>
      <TextInput label="Karta" placeholder="1234 5678 9012 3456" />
      <Group grow>
        <TextInput placeholder="MM/YY" />
        <TextInput placeholder="CVC" />
      </Group>
    </Stack>
  );
};

export default PaymentInfo;
