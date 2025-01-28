import { useState } from "react";
import { useAppContext } from "../AppContext/hook";
import { on } from "events";
export const Search = () => {
  const { onAddProduct, onAddQuantity } = useAppContext();

  const [quantity, setQuantity] = useState<number>(0);
  const [product, setProduct] = useState<number>();

  const handleQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuantity(parseInt(e.target.value));
  };

  const handleProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setProduct(parseInt(e.target.value) - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(product);
    onAddQuantity(product, quantity);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" min={0} max={20} onChange={handleQuantity} />
      <input type="number" onChange={handleProduct} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Search;
