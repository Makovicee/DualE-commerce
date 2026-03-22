import { PRODUCTS } from "../data/products";

export const getRecommended = (count = 3,excludeId?:string) =>
  [...PRODUCTS].filter((product) => product.id !== excludeId).sort(() => Math.random() - 0.5).slice(0, count);
