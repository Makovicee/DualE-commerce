import { Anchor, Group } from "@mantine/core";
import { Bolt } from "lucide-react";

const Categories = () => {
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

  return (
    <Group>
      {categories.map((category) => (
        <Group key={category} gap={"xs"}>
          <Bolt size={20} color="gray" />
          <Anchor size="sm" fw={"500"} key={category} underline="hover">
            {category}
          </Anchor>
        </Group>
      ))}
    </Group>
  );
};
export default Categories;
