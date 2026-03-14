import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { ASTTheme, EFFTheme } from "../theme";
import { useUIMode } from "./UIModeContext";

export const ThemedMantineProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { mode } = useUIMode();

  return (
    <MantineProvider
      theme={mode === "EFF" ? EFFTheme : ASTTheme}
      defaultColorScheme="light"
    >
      {children}
    </MantineProvider>
  );
};
