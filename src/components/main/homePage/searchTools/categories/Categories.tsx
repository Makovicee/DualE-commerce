import { Anchor, Group } from "@mantine/core";
import { CATEGORIES } from "../../../../../core/data/categories";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Group>
      {CATEGORIES.filter((c) => c.id !== "home").map((category) => (
        <Group key={category.id} gap="xs">
          <category.icon size={20} color="gray" />
          <Anchor
            size="sm"
            fw={500}
            underline="hover"
            onClick={() => navigate(category.path)}
          >
            {category.labels.EFF}
          </Anchor>
        </Group>
      ))}
    </Group>
  );
};
export default Categories;
