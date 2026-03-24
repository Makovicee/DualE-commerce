import {
  Center,
  Stack,
  Image,
  ActionIcon,
  Text,
  Box,
  Title,
} from "@mantine/core";
import { useUIMode } from "../../../contexts/UIModeContext";
import SearchTools from "./searchTools/SearchTools";

import { ArrowDown, Flower } from "lucide-react";
import SpecialOffers from "./specialOffers/SpecialOffers";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { mode } = useUIMode();
  const navigate = useNavigate();
  return (
    <>
      {mode === "AST" && (
        <Box
          mb="xl"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--mantine-radius-lg)",
            margin: "0 var(--mantine-spacing-xl)",
          }}
        >
          <Image src="/misc/Hero.jpg" fit="cover" w="100%" mah={600} />
          <Stack
            bg="rgba(0, 0, 0, 0.2)"
            p="xl"
            w="100%"
            h="100%"
            ta="center"
            style={{ position: "absolute", inset: 0 }}
            justify="center"
          >
            <Title fs="italic" c="white">
              Objevte krásu přírody
            </Title>
            <Text fw={500} c="white">
              V našem obchodě najdete širokou škálu květin a rostlin, které vám
              pomohou oživit váš domov.
            </Text>
            <Center>
              <ArrowDown color="white" strokeWidth={2.5} />
            </Center>
          </Stack>
        </Box>
      )}
      <Center flex={1}>
        <Stack w="50%" gap="xl">
          {mode === "EFF" && <SearchTools />}
          <SpecialOffers />
        </Stack>
      </Center>
      {mode === "AST" && (
        <Stack my="xl" align="center" justify="center" gap={0}>
          <ActionIcon
            onClick={() => navigate("/listing")}
            variant="transparent"
            size={"input-xl"}
          >
            <Flower size={60} />
          </ActionIcon>
          <Text fw={"bold"} ta={"center"}>
            Odhalit více
          </Text>
        </Stack>
      )}
    </>
  );
};

export default HomePage;
