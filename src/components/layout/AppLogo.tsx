import { Avatar, Group, Text } from "@mantine/core";
import { Leaf, Rose } from "lucide-react";
import { useUIMode } from "../../contexts/UIModeContext";

interface AppLogoProps {
  onClick?: () => void;
}

const AppLogo = ({ onClick }: AppLogoProps) => {
  const { mode } = useUIMode();

  return (
    <Group
      style={{ cursor: onClick ? "pointer" : "default" }}
      onClick={onClick}
    >
      <Avatar
        size="lg"
        radius="md"
        variant="filled"
        color={mode === "AST" ? "astGreen" : "dark"}
      >
        {mode === "EFF" ? <Rose size={24} /> : <Leaf size={24} />}
      </Avatar>
      <Text size="lg" fw={500} lh={1.2}>
        {mode === "EFF" ? "Black" : "Green"}
        <br />
        {mode === "EFF" ? "Rose" : "Meadows"}
      </Text>
    </Group>
  );
};

export default AppLogo;
