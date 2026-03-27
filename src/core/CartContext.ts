import { createContext, useContext } from "react";
import type { Product, VariantSize } from "../core/data/products";

export interface CartItem {
  product: Product;
  variant: VariantSize;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
addItem: (product: Product, variant: VariantSize, quantity?: number) => void;
  removeItem: (productId: string, variant: VariantSize) => void;
  updateItemCount: (product: Product, variant: VariantSize, quantity: number) => void;
  removeMultipleItems: (itemsToRemove: CartItem[]) => void;
  clearCart: () => void;
  undo: () => void;
  redo: () => void;
  totalItems: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextValue | null>(null);

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
