import { Checkbox, Text, ActionIcon, Table, NumberInput } from "@mantine/core";
import { X } from "lucide-react";

interface ItemRowProps {
  name: string;
  size: string;
  quantity: number;
  price: number;
  checked: boolean;
  onCheck: () => void;
  onRemove: () => void;
  onQuantityChange: (qty: number) => void;
}

const ItemRow = ({
  name,
  size,
  quantity,
  price,
  checked,
  onCheck,
  onRemove,
  onQuantityChange,
}: ItemRowProps) => {
  return (
    <Table.Tr>
      <Table.Td>
        <Checkbox checked={checked} onChange={onCheck} />
      </Table.Td>
      <Table.Td>
        <Text size="xs">{name}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="xs" c="dimmed">
          {size}
        </Text>
      </Table.Td>
      <Table.Td>
        <NumberInput
          styles={{ input: { textAlign: "center" } }}
          hideControls
          w={42}
          value={quantity}
          onChange={(v) => onQuantityChange(Number(v))}
        />
      </Table.Td>
      <Table.Td>
        <Text size="xs" fw={700}>
          {price.toFixed(2)}
        </Text>
      </Table.Td>
      <Table.Td>
        <ActionIcon variant="transparent" color="red" onClick={onRemove}>
          <X size={16} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  );
};

export default ItemRow;
