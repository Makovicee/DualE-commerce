import {
  Center,
  Group,
  Paper,
  Stack,
  Textarea,
  Title,
  Text,
  Divider,
  Grid,
  Autocomplete,
  ColorPicker,
} from "@mantine/core";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { Gift } from "lucide-react";

const GiftOption = () => {
  const { mode } = useUIMode();

  const recipientSelect = (
    <Autocomplete
      placeholder="Pro..."
      data={[
        { group: "Práce", items: ["Klienta", "Oddělení"] },
        { group: "Rodina", items: ["Sestru", "Mámu", "Bratra"] },
      ]}
    />
  );
  const messageInput = <Textarea label="Zpráva" autosize minRows={3} />;
  const colorPicker = (
    <ColorPicker
      format="hex"
      swatches={["#e8a0a0", "#E8C97A"]}
      withPicker={false}
      swatchesPerRow={2}
      style={{ "--cp-swatch-size": mode === "AST" ? "64px" : "32px" }}
    />
  );

  return mode === "EFF" ? (
    <Stack>
      <Text size="sm" fw={600}>
        Dárek{" "}
        <Text size="xs" span c="dimmed" fw={400}>
          (volitelné)
        </Text>
      </Text>
      <Divider />
      <Group wrap="nowrap" align="flex-end">
        {recipientSelect}
        {colorPicker}
      </Group>
      {messageInput}
    </Stack>
  ) : (
    <Grid gutter="xl" justify="center" align="center">
      <Grid.Col span={6}>
        <Paper p="xl" radius="lg">
          <Stack>
            <Center>
              <Gift size={48} />
            </Center>
            {recipientSelect}
            {messageInput}
          </Stack>
        </Paper>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack gap="md" align="flex-end">
          <Title order={3} ta="right">
            Jedná se o{" "}
            <Text span inherit c="astGreen.6">
              dárek
            </Text>
            ?
          </Title>

          <Text c="dimmed" ta="right">
            Darujte květiny těm na kterých vám opravdu záleží. Lorem ipsum dolor
            sit amet, consectetuer adipiscing elit.
          </Text>
          {colorPicker}
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default GiftOption;
