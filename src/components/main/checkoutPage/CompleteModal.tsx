import { Button, Modal, Stack, ThemeIcon, Title, Text } from "@mantine/core";
import { Check } from "lucide-react";

import { useNavigate } from "react-router-dom";

interface CompleteModalProps {
  completed: boolean;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompleteModal = ({ completed, setCompleted }: CompleteModalProps) => {
  const navigate = useNavigate();
  return (
    <Modal
      size={"lg"}
      opened={completed}
      onClose={() => {
        setCompleted(false);
        navigate("/");
      }}
      withCloseButton={false}
      centered
    >
      <Stack align="center">
        <ThemeIcon size={80} radius="50%" color="teal">
          <Check size={40} />
        </ThemeIcon>
        <Title order={2} ta="center">
          Děkujeme za nákup!
        </Title>
        <Text c="dimmed" ta="center">
          Vaše objednávka byla úspěšně přijata.
        </Text>
        <Button
          onClick={() => {
            setCompleted(false);
            navigate("/");
          }}
        >
          Zpět na hlavní stránku
        </Button>
      </Stack>
    </Modal>
  );
};
export default CompleteModal;
