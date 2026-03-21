import { Box, Button, Group, Kbd, Stack, TextInput } from "@mantine/core";
import { Home, Search } from "lucide-react";
import { useUIMode } from "../../contexts/UIModeContext";
import AppLogo from "./AppLogo";
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../core/data/categories";

const EFFNavbar = () => {
  const { toggle, mode } = useUIMode();
  const { pathname, search } = useLocation();

  const active =
    CATEGORIES.find((category) => category.path === pathname)?.id ?? "home";
  const navigate = useNavigate();

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
            {CATEGORIES.map((category) => (
              <Button
                key={category.id}
                flex={category.id === "home" ? undefined : 1}
                variant={active === category.id ? "filled" : "light"}
                style={{ borderTopRightRadius: 4, borderTopLeftRadius: 4 }}
                onClick={() => navigate(category.path + search)}
                mr={category.id === "home" ? "10vw" : undefined}
              >
                {category.id === "home" ? (
                  <Home size={22} />
                ) : (
                  category.labels[mode]
                )}
              </Button>
            ))}
          </Group>
        </Stack>
      </Group>
    </Box>
  );
};

export default EFFNavbar;
