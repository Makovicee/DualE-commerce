import { Badge, Group } from "@mantine/core";

const PopularTagsGroup = () => {
  const tags = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

  return (
    <Group>
      {tags.map((tag) => (
        <Badge
          p={"md"}
          size="md"
          style={{ cursor: "pointer" }}
          variant="light"
          key={tag}
        >
          #{tag}
        </Badge>
      ))}
    </Group>
  );
};

export default PopularTagsGroup;
