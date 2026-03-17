import { AppShell } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";
import { useUIMode } from "../../contexts/UIModeContext";
import ASTNavbar from "./ASTNavbar";
import EFFCardFooter from "./EFFCardFooter";
import EFFNavbar from "./EFFNavbar";

const AppLayout = () => {
  const { mode } = useUIMode();
  const { pathname } = useLocation();

  const showFooter = mode === "EFF" && pathname !== "/checkout";

  return (
    <AppShell
      withBorder={false}
      header={{ height: 108 }}
      footer={mode === "EFF" ? { height: 100 } : undefined}
    >
      <AppShell.Header px={0}>
        {mode === "EFF" ? <EFFNavbar /> : <ASTNavbar />}
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      {showFooter && (
        <AppShell.Footer withBorder>
          <EFFCardFooter />
        </AppShell.Footer>
      )}
    </AppShell>
  );
};

export default AppLayout;
