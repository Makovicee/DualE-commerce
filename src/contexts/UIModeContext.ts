import { createContext, useContext } from 'react';

export type UIMode = 'EFF' | 'AST';

export interface UIModeContextValue {
  mode: UIMode;
  setMode: (mode: UIMode) => void;
  toggle: () => void;
}

export const UIModeContext = createContext<UIModeContextValue | null>(null);

export const useUIMode = (): UIModeContextValue => {
  const ctx = useContext(UIModeContext);
  if (!ctx) throw new Error('useUIMode must be used within UIModeProvider');
  return ctx;
};
