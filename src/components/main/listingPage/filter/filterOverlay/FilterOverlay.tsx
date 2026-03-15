import {
  ActionIcon,
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

const CATEGORIES = [
  "Pouštní kolekce",
  "Exotická kolekce",
  "Zahradní kolekce",
  "Mrazivá kolekce",
];
const FILTERS = ["Hydratace", "Světlo", "Toxicita"];

const FilterOverlay = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ActionIcon
        variant="transparent"
        radius={"50%"}
        size="input-xl"
        onClick={open}
      >
        <Flower size={60} />
      </ActionIcon>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        withCloseButton={true}
        padding="xl"
        position="bottom"
        transitionProps={{ duration: 1000, timingFunction: "ease" }}
      >
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              {CATEGORIES.map((category, i) => (
                <Group key={category}>
                  {i === 0 && <Flower size={40} color="green" />}
                  <UnstyledButton onClick={close}>
                    <Title
                      order={i === 0 ? 1 : 2}
                      fs="italic"
                      fw={500}
                      c={i === 0 ? "dark" : "dimmed"}
                    >
                      {category}
                    </Title>
                  </UnstyledButton>
                </Group>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }} visibleFrom="md">
            <Image
              src={null}
              fallbackSrc="https://placehold.co/400x500"
              radius="md"
              h={350}
            />
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
      </Drawer>
    </>
  );
};

export default FilterOverlay;
