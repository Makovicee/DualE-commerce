import { Group, Paper, Text } from "@mantine/core";
import type { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  label: string;
}

const StatItem = ({ icon: Icon, label }: StatItemProps) => {
  return (
    <Paper
      bg="astGreen.6"
      radius="xl"
      p="md"
      style={{ borderRadius: "0 32px 32px 0" }}
    >
      <Group gap="sm" wrap="nowrap" align="center">
        <Icon size={40} color="white" />
        <Text size="sm" c="white" fw={600}>
          {label}
        </Text>
      </Group>
    </Paper>
  );
};

export default StatItem;
