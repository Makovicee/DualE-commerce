import { Group, Paper, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import type { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  label: string;
  color?: string;
}

const StatItem = ({
  icon: Icon,
  label,
  color = "astGreen.6",
}: StatItemProps) => {
  const { hovered, ref } = useHover();

  return (
    <Paper
      ref={ref}
      bg={color}
      p="md"
      style={{
        borderRadius: "0 32px 32px 0",
        maxWidth: hovered ? 400 : 96,
        overflow: "hidden",
        transition: "max-width 300ms ease",
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
    >
      <Group gap="xl" wrap="nowrap" align="center">
        <Icon size={40} color="white" style={{ flexShrink: 0 }} />
        <Text
          size="sm"
          c="white"
          fw={600}
          style={{ whiteSpace: "normal", width: 280, flexShrink: 0 }}
        >
          {label}
        </Text>
      </Group>
    </Paper>
  );
};

export default StatItem;
