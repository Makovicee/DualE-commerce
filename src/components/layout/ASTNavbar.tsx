import { ActionIcon, Group, Indicator, Stack, Text } from "@mantine/core";
import { Flower, Home, ShoppingCart } from "lucide-react";
import { useUIMode } from "../../contexts/UIModeContext";
import AppLogo from "./AppLogo";
import { useNavigate } from "react-router-dom";

const ASTNavbar = () => {
  const { toggle } = useUIMode();
  const navigate = useNavigate();
  return (
    <Group px="md" py="md" gap="xl" justify="space-between">
      <Group gap="xl">
        <AppLogo onClick={toggle} />
        <Group gap={"lg"} ml={"xl"}>
          <Stack gap={0} align="center">
            <ActionIcon
              onClick={() => navigate("/")}
              color="dark"
              variant="transparent"
              size={"input-sm"}
            >
              <Home size={26} />
            </ActionIcon>
            <Text size="sm">Domů</Text>
          </Stack>
          <Stack gap={0} align="center">
            <ActionIcon
              onClick={() => navigate("/listing")}
              variant="transparent"
              size={"input-sm"}
            >
              <Flower size={26} />
            </ActionIcon>
            <Text size="sm">Kolekce</Text>
          </Stack>
        </Group>
      </Group>
      <Indicator fw={"bold"} label="2" size={20}>
        <ActionIcon color="dark" variant="transparent" size={"input-md"}>
          <ShoppingCart size={22} />
        </ActionIcon>
      </Indicator>
    </Group>
  );
};

export default ASTNavbar;
