import {
  Center,
  Grid,
  Group,
  Paper,
  Stack,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import { User } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";

const CustomerInfo = () => {
  const { mode } = useUIMode();

  const firstNameInput = <TextInput label="Jméno" withAsterisk />;
  const lastNameInput = <TextInput label="Příjmení" withAsterisk />;
  const emailInput = <TextInput label="E-mail" withAsterisk />;
  const phoneInput = <TextInput label="Telefonní číslo" withAsterisk />;

  return mode === "EFF" ? (
    <Stack>
      {phoneInput}
      {emailInput}
      <Group grow>
        {firstNameInput}
        {lastNameInput}
      </Group>
    </Stack>
  ) : (
    <Grid gutter="xl" justify="center" align="center">
      <Grid.Col span={4}>
        <Stack>
          <Title order={3}>
            <Text span c="astGreen.6" inherit>
              Na koho
            </Text>{" "}
            to bude?
          </Title>
          <Text c="dimmed">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin
            mattis lacinia justo.
          </Text>
        </Stack>
      </Grid.Col>
      <Grid.Col span="content">
        <Paper p="xl" radius="lg">
          <Stack>
            <Center>
              <User size={40} />
            </Center>
            <Group grow>
              {firstNameInput}
              {lastNameInput}
            </Group>
            {emailInput}
            {phoneInput}
          </Stack>
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default CustomerInfo;
