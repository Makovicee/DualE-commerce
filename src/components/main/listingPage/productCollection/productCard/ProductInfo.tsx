import {
  ActionIcon,
  Divider,
  Grid,
  Group,
  HoverCard,
  Progress,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { Info } from "lucide-react";

const STATS = ["Hydratace", "Světlo", "Toxicita"];

const ProductInfo = () => {
  return (
    <HoverCard width={750}>
      <HoverCard.Target>
        <ActionIcon h={"100%"} color="gray" variant="light" size={"input-xl"}>
          <Info size={22} />
        </ActionIcon>
      </HoverCard.Target>
      <HoverCard.Dropdown p={"xl"}>
        <Group justify="space-between">
          <Stack w={"60%"}>
            {STATS.map((stat) => (
              <Grid key={stat} align="center">
                <Grid.Col span={3}>
                  <Text c="dimmed">{stat}</Text>
                </Grid.Col>

                <Grid.Col span={6}>
                  <Progress size={"lg"} value={75} />
                </Grid.Col>

                <Grid.Col span={2}>
                  <Text fw={500} ta="right">
                    75 %
                  </Text>
                </Grid.Col>
              </Grid>
            ))}
          </Stack>

          <Stack>
            <Rating value={3.5} fractions={2} readOnly size="lg" />
            <Text>4.6 / 5</Text>
          </Stack>
        </Group>
        <Divider my={"sm"} />
        <Text c={"dimmed"}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          impedit, dolorem architecto harum maiores odit corrupti qui omnis, sed
          sunt placeat nihil vitae alias a aperiam saepe, amet at laborum!
        </Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};

export default ProductInfo;
