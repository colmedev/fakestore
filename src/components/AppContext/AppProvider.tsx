import { useState, type PropsWithChildren } from "react";
import { AppContext, type Product } from "./Context";
import useFetch from "../CustomHook/useFetch";

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState<number>(0);

  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  const onAddProduct = (id: number) => {
    const product = data?.at(id);
    if (!product) {
      console.log(loading ? "loading..." : error);
    }
    setProduct((prev) => [...prev, product]);
  };

  const onAddQuantity = (id: string, quantity: string) => {
    setQuantity(quantity);
  };

  const onRemoveProduct = (id: number) => {
    setProduct((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        onAddProduct,
        items: product,
        quantity,
        onAddQuantity,
        onRemoveProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
