import { Badge, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const TAGS = [
  { label: "Nenáročné", path: "/listing?hydratace=1" },
  { label: "Přímé slunce", path: "/listing?svetlo=3" },
  { label: "Netoxické", path: "/listing?toxicita=1" },
  { label: "Levné", path: "/listing?sort=price_asc" },
];

const PopularTagsGroup = () => {
  const navigate = useNavigate();

  return (
    <Group>
      {TAGS.map((tag) => (
        <Badge
          key={tag.label}
          p="md"
          size="md"
          style={{ cursor: "pointer" }}
          variant="light"
          onClick={() => navigate(tag.path)}
        >
          #{tag.label}
        </Badge>
      ))}
    </Group>
  );
};

export default PopularTagsGroup;
