import {
  Button,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  ActionIcon,
} from "@mantine/core";
import { Info } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";

const ProductOfTheWeek = () => {
  const { mode } = useUIMode();

  const image = (
    <Image
      src={null}
      fallbackSrc="https://placehold.co/64x64"
      h={mode === "EFF" ? 64 : 280}
      w={mode === "EFF" ? 64 : 280}
    />
  );

  const title = <Title order={2}>Product name</Title>;
  const label = (
    <Text fw={500} c={mode === "EFF" ? "dimmed" : "astGreen.5"}>
      Produkt týdne
    </Text>
  );

  const button = (
    <Button size="sm" h={"xl"} color="teal">
      Přidat
    </Button>
  );

  return (
    <Paper>
      {mode === "EFF" ? (
        <Group justify="space-between">
          <Group>
            {image}
            <Stack gap="xs">
              {title}
              <Group>
                {label}
                {button}
              </Group>
            </Stack>
          </Group>
          <ActionIcon variant="transparent" c="dimmed">
            <Info color="gray" size={28} />
          </ActionIcon>
        </Group>
      ) : (
        <Stack>
          <Group justify="space-between">
            <Stack gap={0}>
              {label}
              {title}
            </Stack>
          </Group>
          <Group justify="center" my="xl" wrap="nowrap">
            {image}
            <Stack w={"35%"}>
              <Text>
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                dolor sit amet
              </Text>
              {button}
            </Stack>
          </Group>
        </Stack>
      )}
    </Paper>
  );
};

export default ProductOfTheWeek;
