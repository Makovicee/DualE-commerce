import { useUIMode } from "../../../../../contexts/UIModeContext";
import {
  Group,
  Stack,
  TextInput,
  Text,
  Title,
  Grid,
  Select,
  Input,
} from "@mantine/core";
import { Calendar, MapPin } from "lucide-react";
import { DateInput, DatePicker } from "@mantine/dates";
import type { CheckoutFormProps } from "../../../../../core/logic/useCheckoutForm";
import { ADDRESSES } from "../../../../../core/data/adresses";

const Details = ({ form }: CheckoutFormProps) => {
  const { mode } = useUIMode();

  return mode === "EFF" ? (
    <Stack>
      <DateInput
        size="xs"
        label="Datum"
        leftSection={<Calendar size={16} />}
        withAsterisk
        {...form.getInputProps("date")}
      />
      <Select
        label="Adresa doručení"
        placeholder="Začněte psát ulici..."
        leftSection={<MapPin size={16} />}
        searchable
        nothingFoundMessage="Adresa nenalezena"
        withAsterisk
        data={ADDRESSES}
        onChange={(value) => {
          const address = ADDRESSES.find((a) => a.value === value);
          if (address) {
            form.setFieldValue("address", address.label);
            form.setFieldValue("city", address.city);
            form.setFieldValue("zip", address.zip);
          }
        }}
        renderOption={({ option }) => {
          const address = ADDRESSES.find((a) => a.value === option.value);
          return (
            <Group gap="sm" wrap="nowrap">
              <MapPin size={16} color="gray" />
              <Stack gap={0}>
                <Text size="sm" fw={500}>
                  {option.label}
                </Text>
                <Text size="xs" c="dimmed">
                  {address?.city}, {address?.zip}
                </Text>
              </Stack>
            </Group>
          );
        }}
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
          <Input.Wrapper error={form.errors.date}>
            <DatePicker size="md" {...form.getInputProps("date")} />
          </Input.Wrapper>
        </Grid.Col>
      </Grid>
      <Group justify="center" mt={"md"} mb={"xl"}>
        <TextInput
          label="Ulice"
          withAsterisk
          {...form.getInputProps("address")}
        />
        <TextInput label="Město" withAsterisk {...form.getInputProps("city")} />
        <TextInput label="PSČ" withAsterisk {...form.getInputProps("zip")} />
      </Group>
    </Stack>
  );
};

export default Details;
