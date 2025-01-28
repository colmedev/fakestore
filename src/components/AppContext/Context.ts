import { createContext } from "react";

interface AppContext {
  items: Product[];
  Quantity: Quantity;
  onAddProduct: (id: number) => void;
  onRemoveProduct: (id: number) => void;
  onAddQuantity: (id: string, quantity: string) => void;
}

export interface Quantity {
  quantity: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: Quantity;
}

export const DEFAULT_CONTEXT: AppContext = {
  items: [],
  onAddProduct: () => {},
  onRemoveProduct: () => {},
  onAddQuantity: () => {},
};

export const AppContext = createContext<AppContext | undefined>(undefined);
