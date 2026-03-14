import { Box, Button, Group, Kbd, Stack, TextInput } from "@mantine/core";
import { Home, Search } from "lucide-react";
import { useState } from "react";
import { useUIMode } from "../../contexts/UIModeContext";
import AppLogo from "./AppLogo";

const CATEGORIES = ["Kaktusy", "Růže", "Tropické", "Zimní"];

const EFFNavbar = () => {
  const { toggle } = useUIMode();
  const [active, setActive] = useState("Domů");

  return (
    <Box>
      <Group px="xl" pt="xl" gap="xl">
        <AppLogo onClick={toggle} />
        <Stack flex={1}>
          <TextInput
            placeholder="Hledat dle ID, Názvu, Popisu"
            leftSection={<Search size={16} />}
            rightSection={<Kbd>⌘ + K</Kbd>}
            rightSectionWidth={70}
            flex={1}
          />

          <Group mt="xs" gap="md">
            <Button
              variant={active === "Domů" ? "filled" : "light"}
              style={{ borderTopRightRadius: 4, borderTopLeftRadius: 4 }}
              onClick={() => setActive("Domů")}
              mr={"10vw"}
            >
              <Home size={22} />
            </Button>
            {CATEGORIES.map((category) => (
              <Button
                key={category}
                flex={1}
                variant={active === category ? "filled" : "light"}
                style={{ borderTopRightRadius: 4, borderTopLeftRadius: 4 }}
                onClick={() => setActive(category)}
              >
                {category}
              </Button>
            ))}
          </Group>
        </Stack>
      </Group>
    </Box>
  );
};

export default EFFNavbar;
