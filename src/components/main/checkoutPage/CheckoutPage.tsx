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
} from "lucide-react";
import { useState } from "react";

const STEPS = [
  {
    label: "Košík",
    description: "Přehled položek",
    icon: ShoppingCart,
    effLabel: "3. Položky",
    component: <Cart />,
  },
  {
    label: "Doprava",
    description: "Detaily doručení",
    icon: Car,
    effLabel: "1. Doprava",
    component: <Delivery />,
  },
  {
    label: "Platba",
    description: "Zaplacení objednávky",
    icon: CreditCard,
    effLabel: "2. Platební údaje",
    component: <Payment />,
  },
];

const EFF_ORDER = [STEPS[1], STEPS[2], STEPS[0]];

const CheckoutPage = () => {
  const { mode } = useUIMode();
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);

  const handleStepClick = (step: number) => {
    setActive(step);
    setKey((k) => k + 1);
  };

  return mode === "EFF" ? (
    <SimpleGrid
      h="calc(100dvh - var(--app-shell-header-height) - var(--mantine-spacing-xl) * 2)"
      cols={3}
    >
      {EFF_ORDER.map((item, i) => (
        <Box key={i} px="xl" pt={"md"}>
          <Text ta="center" size="md" fw={500} c="dimmed">
            {item.label}
          </Text>
          {item.component}
        </Box>
      ))}
    </SimpleGrid>
  ) : (
    <Stack>
      <Stepper
        m="xl"
        color="green"
        active={active}
        w="75%"
        mx="auto"
        onStepClick={handleStepClick}
      >
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
          onClick={() => handleStepClick(active + 1)}
          disabled={active === STEPS.length}
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
    </Stack>
  );
};
export default CheckoutPage;
