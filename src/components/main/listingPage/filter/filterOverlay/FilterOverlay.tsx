import {
  ActionIcon,
  AspectRatio,
  Button,
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
import { ArrowRight, Flower } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { CATEGORIES } from "../../../../../core/data/categories";
import type {
  FilterControlProps,
  SortBy,
} from "../../../../../core/logic/useProductFilter";
import {
  PRODUCTS,
  STAT_NAMES,
  type StatValue,
} from "../../../../../core/data/products";

interface FilterOverlayProps extends FilterControlProps {
  size?: "input-sm" | "input-xl";
}

const FilterOverlay = ({
  size = "input-xl",
  filters,
  setStatFilter,
  setOnSortBy,
}: FilterOverlayProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { mode } = useUIMode();
  const { pathname, search } = useLocation();

  const navigate = useNavigate();
  const active =
    CATEGORIES.find((category) => category.path === pathname)?.id ?? "home";

  const categoryProductImage = PRODUCTS.find(
    (product) => product.categoryId === active,
  )?.img;

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
                          navigate(category.path + search);
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
                {categoryProductImage && (
                  <Image
                    src={categoryProductImage}
                    fallbackSrc="https://placehold.co/200x200"
                    radius="md"
                    mah={350}
                  />
                )}
              </AspectRatio>
            </Grid.Col>
          </Grid>

          <Tabs defaultValue="Hydratace" mt="lg">
            <Tabs.List>
              {STAT_NAMES.map((stat) => (
                <Tabs.Tab key={stat} value={stat}>
                  {stat}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {STAT_NAMES.map((stat) => (
              <Tabs.Panel key={stat} value={stat} pt="sm">
                <Group justify="space-between" wrap="nowrap" align="center">
                  <Chip.Group
                    multiple
                    value={filters[stat] ? [String(filters[stat])] : []}
                    onChange={(value) =>
                      setStatFilter(
                        stat,
                        value.length
                          ? (Number(value[value.length - 1]) as StatValue)
                          : null,
                      )
                    }
                  >
                    <Group gap="sm">
                      <Chip value="1">Nízká</Chip>
                      <Chip value="2">Střední</Chip>
                      <Chip value="3">Vysoká</Chip>
                    </Group>
                  </Chip.Group>
                  <Button
                    rightSection={<ArrowRight />}
                    onClick={close}
                    size="lg"
                    color="grape"
                  >
                    Zobrazit
                  </Button>
                  <Select
                    label="Řadit dle"
                    value={filters.sortBy}
                    onChange={(v) => setOnSortBy(v as SortBy)}
                    data={[
                      { value: "price_asc", label: "Cena vzestupně" },
                      { value: "price_desc", label: "Cena sestupně" },
                      { value: "newest", label: "Nejnovější" },
                      { value: "discounted", label: "Zlevněné" },
                    ]}
                    clearable
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
