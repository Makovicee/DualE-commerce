import { Component, Home, Leaf, Rose, Snowflake, Sun } from "lucide-react";


export type CategoryId = Exclude<typeof CATEGORIES[number]["id"], "home">;

export const CATEGORIES = [
  {
    id: "home",
    path: "/",
    labels: { EFF: "Domů", AST: "Domů" },
    icon: Home,
  },
   {
    id: "all",
    path: "/listing",
    labels: { EFF: "Vše", AST: "Vše" },
    icon: Component,
  },
  {
    id: "kaktusy",
    path: "/listing/kaktusy",
    labels: { EFF: "Kaktusy", AST: "Pouštní kolekce" },
    icon: Sun,
  },
  {
    id: "ruze",
    path: "/listing/ruze",
    labels: { EFF: "Růže", AST: "Romantická kolekce" },
    icon: Rose,
  },
  {
    id: "tropicke",
    path: "/listing/tropicke",
    labels: { EFF: "Tropické", AST: "Exotická kolekce" },
    icon: Leaf,
  },
  {
    id: "zimni",
    path: "/listing/zimni",
    labels: { EFF: "Zimní", AST: "Mrazivá kolekce" },
    icon: Snowflake,
  },
] as const

