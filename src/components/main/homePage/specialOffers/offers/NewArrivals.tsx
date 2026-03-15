import {
  ActionIcon,
  Button,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ArrowRight, Zap } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";

const NewArrivals = () => {
  const { mode } = useUIMode();

  const title = (
    <Title order={2}>
      {mode === "EFF" ? (
        <Group gap="xs">
          Novinky <Zap size={20} fill="orange" color="orange" />
        </Group>
      ) : (
        "Nové přírůstky"
      )}
    </Title>
  );

  const arrowButton = (
    <ActionIcon variant="transparent" c="dimmed">
      <ArrowRight size={28} />
    </ActionIcon>
  );

  return (
    <Paper>
      {mode === "EFF" ? (
        <Group justify="space-between">
          <Stack gap={4}>
            {title}
            <Text c="dimmed" size="sm">
              50+ nových květin
            </Text>
          </Stack>
          {arrowButton}
        </Group>
      ) : (
        <Stack align="center">
          <Group gap="xs" align="center">
            {title}
            {arrowButton}
          </Group>
          <SimpleGrid cols={3} mt="lg" w="100%">
            {Array.from({ length: 3 }).map((_, i) => (
              <Image
                key={i}
                src={null}
                fallbackSrc={`https://placehold.co/200x400`}
                h={400}
              />
            ))}
          </SimpleGrid>
          <Stack align="center" mt="lg" maw={440}>
            <Title order={3} ta="center">
              Název položky
            </Title>
            <Text ta="center" c="dimmed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Curabitur ligula sapien, pulvinar a vestibulum quis.
            </Text>
            <Button mt="sm">Nahlédnout</Button>
          </Stack>
        </Stack>
      )}
    </Paper>
  );
};

export default NewArrivals;
