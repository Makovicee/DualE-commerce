import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { ASTTheme, EFFTheme } from "../theme";
import { useUIMode } from "./UIModeContext";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

export const ThemedMantineProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { mode } = useUIMode();

  return (
    <MantineProvider
      theme={mode === "EFF" ? EFFTheme : ASTTheme}
      forceColorScheme="light"
    >
      <ModalsProvider>
        <Notifications />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
};
