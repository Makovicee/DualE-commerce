import type { CategoryId } from "./categories";



export type StatName = "Hydratace" | "Světlo" | "Toxicita";
export type StatValue = 1 | 2 | 3;
export type VariantSize = "S" | "M" | "XL";

export interface ProductVariant {
  size: VariantSize;
  sizeLabel: string;
  price: number;
  stock: number;
}

export interface ProductComment {
  id: string;
  author: string;
  content: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  categoryId: CategoryId;
  img: string | null;
  rating: number;
  discount?: number;
  variants: Record<VariantSize, ProductVariant>;
  stats: Record<StatName, StatValue>;
  comments?: ProductComment[];
}

export const PRODUCTS: Product[] = [
{
    id: "XZR12",
   name: "Flora Grasa",
    description: "Sukulentní rostlina s masitými listy ukládajícími vodu. Pochází z jihoafrických savan a snáší i delší období bez zálivky. Perfektní do světlých interiérů.",
    categoryId: "tropicke",
    img: "/tropical/Tropical1.png",
    rating: 4.6,
    variants: {
      S: { size: "S", sizeLabel: "15cm", price: 75, stock: 96 },
      M: { size: "M", sizeLabel: "18cm", price: 85, stock: 50 },
      XL: { size: "XL", sizeLabel: "22cm", price: 109, stock: 10 },
    },
    stats: { Hydratace: 3, Světlo: 2, Toxicita: 1 },
    comments: [
      { id: "c1", author: "Jan Novák", content: "Skvělá rostlina, velmi odolná." },
      { id: "c2", author: "Marie Svobodová", content: "Krásná, doporučuji každému začátečníkovi." },
    ],
  },

]
