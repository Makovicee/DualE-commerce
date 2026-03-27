import { useState, type ReactNode } from "react";
import { useListState } from "@mantine/hooks";
import { CartContext } from "./CartContext";
import type { CartItem } from "./CartContext";
import type { Product, VariantSize } from "../core/data/products";

const getKey = (productId: string, variant: VariantSize) =>
  `${productId}-${variant}`;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, handlers] = useListState<CartItem>([]);

  const [pastStates, setPastStates] = useState<CartItem[][]>([]);
  const [futureStates, setFutureStates] = useState<CartItem[][]>([]);

  const saveHistory = () => {
    setPastStates((prev) => [...prev, items]);
    setFutureStates([]);
  };

  const addItem = (product: Product, variant: VariantSize, quantity = 1) => {
    saveHistory();
    const index = items.findIndex(
      (i) => getKey(i.product.id, i.variant) === getKey(product.id, variant),
    );
    if (index >= 0) {
      handlers.setItem(index, {
        ...items[index],
        quantity: items[index].quantity + quantity,
      });
    } else {
      handlers.append({ product, variant, quantity });
    }
  };

  const removeItem = (productId: string, variant: VariantSize) => {
    saveHistory();
    const index = items.findIndex(
      (i) => getKey(i.product.id, i.variant) === getKey(productId, variant),
    );
    if (index >= 0) handlers.remove(index);
  };

  const removeMultipleItems = (itemsToRemove: CartItem[]) => {
    saveHistory();
    const keysToRemove = itemsToRemove.map((i) =>
      getKey(i.product.id, i.variant),
    );
    handlers.filter(
      (i) => !keysToRemove.includes(getKey(i.product.id, i.variant)),
    );
  };

  const updateItemCount = (
    product: Product,
    variant: VariantSize,
    quantity: number,
  ) => {
    saveHistory();
    const index = items.findIndex(
      (i) => getKey(i.product.id, i.variant) === getKey(product.id, variant),
    );

    if (quantity <= 0) {
      if (index >= 0) handlers.remove(index);
      return;
    }

    if (index >= 0) {
      handlers.setItem(index, { ...items[index], quantity });
    } else {
      handlers.append({ product, variant, quantity });
    }
  };

  const clearCart = () => {
    saveHistory();
    handlers.setState([]);
  };

  const undo = () => {
    if (pastStates.length === 0) return;
    const previous = pastStates[pastStates.length - 1];
    setPastStates((prev) => prev.slice(0, -1));
    setFutureStates((prev) => [items, ...prev]);
    handlers.setState(previous);
  };

  const redo = () => {
    if (futureStates.length === 0) return;
    const next = futureStates[0];
    setFutureStates((prev) => prev.slice(1));
    setPastStates((prev) => [...prev, items]);
    handlers.setState(next);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateItemCount,
        removeMultipleItems,
        clearCart,
        undo,
        redo,
        totalItems: items.reduce((acc, i) => acc + i.quantity, 0),
        totalPrice: items.reduce(
          (acc, i) => acc + i.product.variants[i.variant].price * i.quantity,
          0,
        ),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
