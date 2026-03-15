import { Carousel } from "@mantine/carousel";
import { Badge, Group, Image, Paper, Stack, Text, Title } from "@mantine/core";
import { Eye } from "lucide-react";
import { useUIMode } from "../../../../../contexts/UIModeContext";

const SLIDES = [
  { src: null },
  { src: null },
  { src: null },
  { src: null },
  { src: null },
  { src: null },
  { src: null },
  { src: null },
];

const SpecialOffer = () => {
  const { mode } = useUIMode();

  const subtitle = (
    <Text c="dimmed" size="sm">
      Končí za: 12h 43m 54s
    </Text>
  );

  return (
    <Paper h={"100%"} p={0}>
      {mode === "EFF" ? (
        <Group
          style={{ cursor: "pointer" }}
          h="100%"
          justify="space-around"
          wrap="nowrap"
        >
          <Stack gap="xs">
            <Badge color="indigo">Akce</Badge>
            <Title order={3}>50 % Sleva Tropické</Title>
            {subtitle}
          </Stack>
          <Group>
            <Image
              src={null}
              fallbackSrc="https://placehold.co/115x115"
              h={115}
              w={115}
            />
          </Group>
        </Group>
      ) : (
        <Stack>
          <Group gap="xs" align="center">
            <Title order={2}>Pouštní kolekce</Title>
            <Text c="dimmed">- Sezonní výběr se zvýhodněním</Text>
          </Group>
          <Carousel slideSize="25%" slideGap="md" withControls={true}>
            {SLIDES.map((_, i) => (
              <Carousel.Slide key={i}>
                {i === SLIDES.length - 1 ? (
                  <Paper
                    h={200}
                    bg="astGreen.6"
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Stack gap={"xs"} align="center" c="white">
                      <Eye size={28} />
                      <Text fw={500}>Objevit další</Text>
                    </Stack>
                  </Paper>
                ) : (
                  <Image
                    src={null}
                    fallbackSrc="https://placehold.co/200x200"
                    h={200}
                  />
                )}
              </Carousel.Slide>
            ))}
          </Carousel>
          {subtitle}
        </Stack>
      )}
    </Paper>
  );
};

export default SpecialOffer;
