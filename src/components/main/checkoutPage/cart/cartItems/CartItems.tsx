import { Checkbox, Group, Stack, Table, Text } from "@mantine/core";
import ItemRow from "./ItemRow";

const ITEMS = [
  { id: 1, name: "Název položky", size: "XS", quantity: 3, price: 509 },
  { id: 2, name: "Název položky", size: "XL", quantity: 1, price: 129 },
  { id: 3, name: "Název položky", size: "XL", quantity: 4, price: 147 },
  { id: 4, name: "Název položky", size: "XS", quantity: 8, price: 841 },
];

const CartItems = () => {
  return (
    <Stack gap={"xl"} px={"md"}>
      <Group ml={"xs"}>
        <Checkbox indeterminate />
        <Text size="xs" c="red" fw={500} style={{ cursor: "pointer" }}>
          Smazat vše
        </Text>
      </Group>
      <Table>
        <Table.Tbody>
          {ITEMS.map((item) => (
            <ItemRow
              key={item.id}
              {...item}
              checked={true}
              onCheck={() => {}}
              onRemove={() => {}}
            />
          ))}
        </Table.Tbody>
        <Table.Tfoot>
          <Table.Tr>
            <Table.Td colSpan={4}>
              <Text size="xs">Celkem</Text>
            </Table.Td>
            <Table.Td>
              <Text size="xs" fw={700}>
                {2000.11}
              </Text>
            </Table.Td>
            <Table.Td />
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </Stack>
  );
};

export default CartItems;
