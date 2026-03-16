import {
  Card,
  Image,
  Text,
  Group,
  Center,
  Stack,
  ActionIcon,
} from "@mantine/core";
import { ShoppingBasket } from "lucide-react";

const Preview = () => {
  return (
    <Card flex={1} withBorder>
      <Card.Section flex={1} withBorder p={"md"}>
        <Center h={"100%"}>
          <Image
            src={null}
            fallbackSrc="https://placehold.co/300x300"
            h={300}
            w={300}
          />
        </Center>
      </Card.Section>
      <Card.Section withBorder pt={"sm"}>
        <Group justify="flex-end" gap="md">
          <Stack align="flex-end" gap={0}>
            <Text fw={700} size="xl">
              149 Kč
            </Text>
            <Text td="line-through" c="dimmed">
              75 Kč
            </Text>
          </Stack>
          <ActionIcon color={"grape"} size={"input-xl"}>
            <ShoppingBasket size={36} />
          </ActionIcon>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default Preview;
