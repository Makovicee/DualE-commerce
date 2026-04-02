import { Group, Stack, TextInput, Kbd, Text, Divider } from "@mantine/core";
import type { CheckoutFormProps } from "../../../../../core/logic/useCheckoutForm";
import { useRef } from "react";
import { useHotkeys } from "@mantine/hooks";
import { useCart } from "../../../../../core/CartContext";

const PaymentInfo = ({ form }: CheckoutFormProps) => {
  const { clearCart, undo, redo } = useCart();

  useHotkeys([
    ["mod+z", undo],
    ["mod+y", redo],
    ["mod+d", clearCart],
  ]);

  const formatCardNumber = (value: string) =>
    value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    return digits.length >= 2
      ? `${digits.slice(0, 2)}/${digits.slice(2)}`
      : digits;
  };

  const cardRef = useRef<HTMLInputElement>(null);
  const expiryRef = useRef<HTMLInputElement>(null);
  const cvcRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <Stack justify="space-between" h={"100%"}>
      <Stack>
        <TextInput
          ref={cardRef}
          withAsterisk
          label="Karta"
          placeholder="1234 5678 9012 3456"
          {...form.getInputProps("cardNumber")}
          onChange={(e) => {
            const formatted = formatCardNumber(e.target.value);
            form.setFieldValue("cardNumber", formatted);
            if (formatted.replace(/\s/g, "").length === 16)
              expiryRef.current?.focus();
          }}
        />
        <Group grow>
          <TextInput
            ref={expiryRef}
            placeholder="MM/YY"
            {...form.getInputProps("cardExpiry")}
            onChange={(e) => {
              const formatted = formatExpiry(e.target.value);
              form.setFieldValue("cardExpiry", formatted);
              if (formatted.length === 5) cvcRef.current?.focus();
            }}
          />
          <TextInput
            ref={cvcRef}
            placeholder="CVC"
            {...form.getInputProps("cardCVC")}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "").slice(0, 3);
              form.setFieldValue("cardCVC", value);
              if (value.length === 3) nameRef.current?.focus();
            }}
          />
        </Group>
        <TextInput
          ref={nameRef}
          placeholder="Jméno příjmení"
          {...form.getInputProps("cardName")}
        />
      </Stack>
      <Stack align="center">
        <Divider w={"50%"} label="Zkratky košíku" />
        <Group gap={"xl"} justify="center">
          <Stack gap={"xs"} align="center">
            <Text size="sm" c="dimmed">
              Smazat
            </Text>
            <Kbd>⌘ + D</Kbd>
          </Stack>
          <Stack gap={"xs"} align="center">
            <Text size="sm" c="dimmed">
              Navrátit
            </Text>
            <Kbd>⌘ + Y</Kbd>
          </Stack>
          <Stack gap={"xs"} align="center">
            <Text size="sm" c="dimmed">
              Vrátit
            </Text>
            <Kbd>⌘ + Z</Kbd>
          </Stack>
        </Group>
      </Stack>
    </Stack>
  );
};

export default PaymentInfo;
