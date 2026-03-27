import type { ReactNode } from "react";
import { useListState } from "@mantine/hooks";
import { CartContext } from "./CartContext";
import type { CartItem } from "./CartContext";
import type { Product, VariantSize } from "../core/data/products";

const getKey = (productId: string, variant: VariantSize) =>
  `${productId}-${variant}`;

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, handlers] = useListState<CartItem>([]);

  const addItem = (product: Product, variant: VariantSize, quantity = 1) => {
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
    const index = items.findIndex(
      (i) => getKey(i.product.id, i.variant) === getKey(productId, variant),
    );
    if (index >= 0) handlers.remove(index);
  };

  const removeMultipleItems = (itemsToRemove: CartItem[]) => {
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

  const clearCart = () => handlers.setState([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateItemCount,
        removeMultipleItems,
        clearCart,
        undo: () => {},
        redo: () => {},
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
