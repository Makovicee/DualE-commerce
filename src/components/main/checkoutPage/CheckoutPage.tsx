import { Box, SimpleGrid, Stepper, Text } from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import Payment from "./payment/Payment";
import Delivery from "./delivery/Delivery";
import Cart from "./cart/Cart";
import { Car, CreditCard, ShoppingCart } from "lucide-react";
import { useState } from "react";

const EFF_ORDER = [
  { label: "1. Doprava", component: <Delivery /> },
  { label: "2. Platební údaje", component: <Payment /> },
  { label: "3. Položky", component: <Cart /> },
];

const AST_STEPS = [
  {
    label: "Košík",
    description: "Přehled položek",
    icon: ShoppingCart,
    component: <Cart />,
  },
  {
    label: "Doprava",
    description: "Detaily doručení",
    icon: Car,
    component: <Delivery />,
  },
  {
    label: "Platba",
    description: "Zaplacení objednávky",
    icon: CreditCard,
    component: <Payment />,
  },
];

const CheckoutPage = () => {
  const { mode } = useUIMode();
  const [active, setActive] = useState(0);
  const [key, setKey] = useState(0);

  const handleStepClick = (step: number) => {
    setActive(step);
    setKey((k) => k + 1);
  };

  return mode === "EFF" ? (
    <SimpleGrid mt="xl" cols={3}>
      {EFF_ORDER.map((item, i) => (
        <Box key={i} px="xl">
          <Text ta="center" size="md" fw={500} c="dimmed">
            {item.label}
          </Text>
          {item.component}
        </Box>
      ))}
    </SimpleGrid>
  ) : (
    <Stepper
      m="xl"
      color="green"
      active={active}
      w="75%"
      mx="auto"
      onStepClick={handleStepClick}
    >
      {AST_STEPS.map((step) => (
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
    </Stepper>
  );
};
export default CheckoutPage;
