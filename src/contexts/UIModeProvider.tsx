import type { ReactNode } from "react";
import { useState } from "react";
import { UIModeContext, type UIMode } from "./UIModeContext";

export const UIModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<UIMode>("EFF");
  const toggle = () => setMode((prev) => (prev === "EFF" ? "AST" : "EFF"));

  return (
    <UIModeContext.Provider value={{ mode, setMode, toggle }}>
      {children}
    </UIModeContext.Provider>
  );
};
