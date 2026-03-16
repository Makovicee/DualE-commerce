import {
  Blockquote,
  Divider,
  Group,
  Paper,
  Rating,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { MessageCircleMore } from "lucide-react";

const AdditionalInfo = () => {
  return (
    <Paper>
      <Group align="stretch" wrap="nowrap">
        <Stack flex={1}>
          <Rating value={3.5} fractions={2} readOnly size="xl" />
          <Text size="lg" fw={500}>
            4.6 / 5
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed
            auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in
            nulla enim. Phasellus molestie magna non est bibendum non venenatis
            nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris
            iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
            Proin quis tortor
          </Text>
        </Stack>

        <Divider orientation="vertical" />
        <ScrollArea offsetScrollbars flex={1} h={350}>
          <Stack gap="md" pl="md">
            {[1, 2, 3].map((i) => (
              <Blockquote
                key={i}
                color="astGreen.8"
                cite="–Don Juan"
                iconSize={60}
                icon={<MessageCircleMore size={30} />}
                mt="xl"
              >
                <Text fs="italic">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Curabitur ligula sapien, pulvinar.
                </Text>
              </Blockquote>
            ))}
          </Stack>
        </ScrollArea>
      </Group>
    </Paper>
  );
};

export default AdditionalInfo;
