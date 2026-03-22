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
import type { Product } from "../../../../../core/data/products";

const AdditionalInfo = ({ product }: { product: Product }) => {
  return (
    <Paper>
      <Group align="stretch" wrap="nowrap">
        <Stack flex={1}>
          <Rating value={product.rating} fractions={2} readOnly size="xl" />
          <Text size="lg" fw={500}>
            {product.rating} / 5
          </Text>
          <Text>{product.description}</Text>
        </Stack>

        <Divider orientation="vertical" />
        <ScrollArea offsetScrollbars flex={1} h={350}>
          <Stack gap="md" pl="md">
            {product.comments?.map((comment) => (
              <Blockquote
                key={comment.id}
                color="astGreen.8"
                cite={`–${comment.author}`}
                iconSize={60}
                icon={<MessageCircleMore size={30} />}
                mt="xl"
              >
                <Text fs="italic">{comment.content}</Text>
              </Blockquote>
            ))}
          </Stack>
        </ScrollArea>
      </Group>
    </Paper>
  );
};

export default AdditionalInfo;
