import { Home, Leaf, Rose, Snowflake, Sun, type LucideIcon } from "lucide-react";
import type { UIMode } from "../../contexts/UIModeContext";

export interface Category {
    id: string;
    path:string;
    labels: Record<UIMode, string>;
    icon:LucideIcon
}

export const CATEGORIES: Category[] = [
  {
    id: "home",
    path: "/",
    labels: { EFF: "Domů", AST: "Domů" },
    icon: Home,
  },
  {
    id: "cactus",
    path: "/listing/kaktusy",
    labels: { EFF: "Kaktusy", AST: "Pouštní kolekce" },
    icon: Sun,
  },
  {
    id: "roses",
    path: "/listing/ruze",
    labels: { EFF: "Růže", AST: "Romantická kolekce" },
    icon: Rose,
  },
  {
    id: "tropical",
    path: "/listing/tropicke",
    labels: { EFF: "Tropické", AST: "Exotická kolekce" },
    icon: Leaf,
  },
  {
    id: "winter",
    path: "/listing/zimni",
    labels: { EFF: "Zimní", AST: "Mrazivá kolekce" },
    icon: Snowflake,
  },
];

