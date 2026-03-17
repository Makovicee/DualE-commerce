import { useState } from "react";
import { useUIMode } from "../../../../../contexts/UIModeContext";
import { Group, Stack, TextInput, Text, Title, Grid } from "@mantine/core";
import { Calendar, MapPin } from "lucide-react";
import { DateInput, DatePicker } from "@mantine/dates";

const Details = () => {
  const { mode } = useUIMode();
  const [date, setDate] = useState<string | null>(null);

  return mode === "EFF" ? (
    <Stack>
      <DateInput
        size="xs"
        label="Datum"
        leftSection={<Calendar size={16} />}
        withAsterisk
        value={date}
        onChange={setDate}
      />

      <TextInput
        label="Adresa doručení"
        leftSection={<MapPin size={16} />}
        withAsterisk
      />
    </Stack>
  ) : (
    <Stack>
      <Grid gutter={"xl"} justify="center" align="center">
        <Grid.Col span={5}>
          <Stack>
            <Title order={3}>
              <Text span c="astGreen.6" inherit>
                Kdy
              </Text>{" "}
              <Text span inherit>
                a
              </Text>{" "}
              <Text span c="astGreen.8" inherit>
                kam
              </Text>{" "}
              doručíme?
            </Title>

            <Text c="dimmed">
              Speciálně Vám doručíme květiny v den kdy si přejete. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit.
            </Text>
          </Stack>
        </Grid.Col>

        <Grid.Col span="content">
          <DatePicker size="md" value={date} onChange={setDate} />
        </Grid.Col>
      </Grid>
      <Group justify="center" mt={"md"} mb={"xl"}>
        <TextInput label="Ulice" withAsterisk />
        <TextInput label="Město" withAsterisk />
        <TextInput label="PSČ" withAsterisk />
      </Group>
    </Stack>
  );
};

export default Details;
