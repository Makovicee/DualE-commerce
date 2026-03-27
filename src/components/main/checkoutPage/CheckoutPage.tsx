import {
  ActionIcon,
  Box,
  Button,
  Group,
  SimpleGrid,
  Stack,
  Stepper,
  Text,
} from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import Payment from "./payment/Payment";
import Delivery from "./delivery/Delivery";
import Cart from "./cart/Cart";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  Check,
  CreditCard,
  ShoppingCart,
  X,
} from "lucide-react";
import { useState } from "react";
import { useCart } from "../../../core/CartContext";
import CompleteModal from "./CompleteModal";
import {
  useCheckoutForm,
  type CheckoutFormValues,
} from "../../../core/logic/useCheckoutForm";
import { notifications } from "@mantine/notifications";

const STEP_FIELDS: Record<number, (keyof CheckoutFormValues)[]> = {
  0: [], // košík
  1: [
    "date",
    "address",
    "city",
    "zip",
    "firstName",
    "lastName",
    "email",
    "phone",
  ],
  2: ["cardNumber", "cardExpiry", "cardCVC", "cardName"],
};

const CheckoutPage = () => {
  const { mode } = useUIMode();
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);
  const { items, clearCart } = useCart();
  const [completed, setCompleted] = useState(false);

  const form = useCheckoutForm();

  const STEPS = [
    {
      label: "Košík",
      description: "Přehled položek",
      icon: ShoppingCart,
      effLabel: "3. Položky",
      component: <Cart form={form} />,
    },
    {
      label: "Doprava",
      description: "Detaily doručení",
      icon: Car,
      effLabel: "1. Doprava",
      component: <Delivery form={form} />,
    },
    {
      label: "Platba",
      description: "Zaplacení objednávky",
      icon: CreditCard,
      effLabel: "2. Platební údaje",
      component: <Payment form={form} />,
    },
  ];

  const EFF_ORDER = [STEPS[1], STEPS[2], STEPS[0]];

  const handleNext = () => {
    const fields = STEP_FIELDS[active];

    if (fields.length > 0) {
      const errors = form.validate();
      const hasStepErrors = fields.some((field) => errors.errors[field]);

      if (hasStepErrors) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        notifications.show({
          position: "top-center",
          withCloseButton: true,
          autoClose: 5000,
          title: "Chyba v údajích",
          message:
            "Ve vašem momentálním kroku objednávky se nachází neplatné údaje. Prosíme o jejich opravu pro pokračování v objednávce.",
          color: "red",
          icon: <X />,
        });
        return;
      }
    }

    if (active === STEPS.length - 1) {
      handleComplete();
    } else {
      handleStepClick(active + 1);
    }
  };

  const handleComplete = () => {
    clearCart();
    setCompleted(true);
  };

  const handleStepClick = (step: number) => {
    form.clearErrors();
    setActive(step);
    setKey((k) => k + 1);
  };

  return mode === "EFF" ? (
    <SimpleGrid
      h="calc(100dvh - var(--app-shell-header-height) - var(--mantine-spacing-xl) * 2)"
      cols={3}
    >
      {EFF_ORDER.map((item, i) => (
        <Box key={i} px="xl" pt={"sm"}>
          <Text ta="center" size="md" fw={500} c="dimmed">
            {item.label}
          </Text>
          {item.component}
        </Box>
      ))}
    </SimpleGrid>
  ) : (
    <Stack>
      <Stepper m="xl" color="green" active={active} w="75%" mx="auto">
        {STEPS.map((step) => (
          <Stepper.Step
            key={step.label}
            icon={<step.icon size={18} style={{ display: "block" }} />}
            label={step.label}
            description={step.description}
          >
            <Box
              mt="xl"
              key={key}
              style={{
                animation: "stepIn 1000ms ease-out",
              }}
            >
              {step.component}
            </Box>
          </Stepper.Step>
        ))}
        <Stepper.Completed>
          <Text ta="center" mt="xl">
            Objednávka dokončena!
          </Text>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mb="xl">
        <ActionIcon
          variant="light"
          disabled={active === 0}
          onClick={() => handleStepClick(active - 1)}
          size={"input-md"}
        >
          <ArrowLeft size={22} />
        </ActionIcon>
        <Button
          color="grape"
          onClick={handleNext}
          disabled={active === STEPS.length || items.length === 0}
          size="lg"
          rightSection={
            active === STEPS.length - 1 ? (
              <Check size={22} />
            ) : (
              <ArrowRight size={22} />
            )
          }
        >
          {active === STEPS.length - 1 ? "Dokončit" : "Pokračovat"}
        </Button>
      </Group>
      <CompleteModal completed={completed} setCompleted={setCompleted} />
    </Stack>
  );
};
export default CheckoutPage;
