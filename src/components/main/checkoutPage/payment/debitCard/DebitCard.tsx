import {
  ActionIcon,
  Box,
  Card,
  Group,
  Paper,
  PinInput,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { RotateCcw, Wifi } from "lucide-react";
import { useState } from "react";

const DebitCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <Stack align="flex-end">
      <Box
        w={800}
        h={350}
        style={{
          perspective: "1000px",
        }}
      >
        <Box
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            transformStyle: "preserve-3d",
            transition: "transform 1000ms ease",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <Card
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
            }}
          >
            <Stack gap="xl">
              <Text size="lg" fw="bold">
                Debit
              </Text>
              <PinInput type="number" length={16} gap="xs" size="sm" />
              <Group align="end" justify="space-between">
                <Group>
                  <TextInput size="sm" label="Držitel karty" />
                  <TextInput size="sm" label="Platnost" />
                </Group>
                <Box pos="relative" w={72} h={48}>
                  <Paper
                    p={0}
                    radius="xl"
                    bg="red"
                    w={48}
                    h={48}
                    pos="absolute"
                    left={0}
                  />
                  <Paper
                    p={0}
                    radius="xl"
                    bg="yellow"
                    w={48}
                    h={48}
                    pos="absolute"
                    left={24}
                  />
                </Box>
              </Group>
            </Stack>
          </Card>

          <Card
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
            p={0}
          >
            <Stack gap={"xl"} justify="center" h="100%" align="flex-end">
              <Box p={0} m={0} bg="yellow.3" w={"100%"} h={56} />
              <TextInput label="CVC" w={120} pr={"xl"} />
              <Group w={"100%"} justify="space-between" px={"xl"}>
                <Text size="sm" c="dimmed">
                  Vaše platební údaje udržujeme v maximálním bezpečí.
                </Text>
                <Wifi size={32} style={{ transform: "rotate(90deg)" }} />
              </Group>
            </Stack>
          </Card>
        </Box>
      </Box>

      <Tooltip label="Otočit kartu" color="astGreen.7">
        <ActionIcon size="input-md" onClick={() => setFlipped((f) => !f)}>
          <RotateCcw size={28} />
        </ActionIcon>
      </Tooltip>
    </Stack>
  );
};

export default DebitCard;
