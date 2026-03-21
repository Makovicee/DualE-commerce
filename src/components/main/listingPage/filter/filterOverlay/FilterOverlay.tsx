import {
  ActionIcon,
  AspectRatio,
  Chip,
  Drawer,
  Grid,
  Group,
  Image,
  Select,
  Stack,
  Tabs,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Flower } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../../../../core/data/categories";

const FILTERS = ["Hydratace", "Světlo", "Toxicita"];

interface FilterOverlayProps {
  size?: "input-sm" | "input-xl";
}

const FilterOverlay = ({ size = "input-xl" }: FilterOverlayProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { mode } = useUIMode();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const active =
    CATEGORIES.find((category) => category.path === pathname)?.id ?? "home";

  return (
    <>
      <ActionIcon
        variant="transparent"
        radius={"50%"}
        size={size}
        onClick={open}
      >
        <Flower size={size === "input-xl" ? 60 : 32} />
      </ActionIcon>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        withCloseButton={false}
        padding="xl"
        position="bottom"
        keepMounted
        transitionProps={{ duration: 1000, timingFunction: "ease" }}
        styles={{
          body: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Stack flex={1}>
          <Grid flex={1} gutter="xl">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                {CATEGORIES.filter((category) => category.id !== "home").map(
                  (category) => (
                    <Group align="baseline" gap={"xs"} key={category.id}>
                      {active === category.id && (
                        <category.icon
                          size={40}
                          color="var(--mantine-color-grape-6)"
                        />
                      )}
                      <UnstyledButton
                        onClick={() => {
                          navigate(category.path);
                          close();
                        }}
                      >
                        <Title
                          order={active === category.id ? 1 : 2}
                          fs="italic"
                          fw={500}
                          c={active === category.id ? "dark" : "dimmed"}
                        >
                          {category.labels[mode]}
                        </Title>
                      </UnstyledButton>
                    </Group>
                  ),
                )}
              </Stack>
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, md: 4 }}
              visibleFrom="md"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AspectRatio ratio={1} w={350}>
                <Image
                  src={null}
                  fallbackSrc="https://placehold.co/200x200"
                  radius="md"
                />
              </AspectRatio>
            </Grid.Col>
          </Grid>

          <Tabs defaultValue="Hydratace" mt="lg">
            <Tabs.List>
              {FILTERS.map((filter) => (
                <Tabs.Tab key={filter} value={filter}>
                  {filter}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {FILTERS.map((filter) => (
              <Tabs.Panel key={filter} value={filter} pt="sm">
                <Group justify="space-between" wrap="nowrap" align="flex-end">
                  <Chip.Group>
                    <Group gap="sm" wrap="wrap">
                      <Chip value="low">Nízká</Chip>
                      <Chip value="medium">Střední</Chip>
                      <Chip value="high">Vysoká</Chip>
                    </Group>
                  </Chip.Group>
                  <Select
                    label="Řadit dle"
                    defaultValue="Doporučeno"
                    data={["Doporučeno", "Nejnovější"]}
                  />
                </Group>
              </Tabs.Panel>
            ))}
          </Tabs>
        </Stack>
      </Drawer>
    </>
  );
};

export default FilterOverlay;
