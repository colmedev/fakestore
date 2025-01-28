import { useState } from "react";

import { useAppContext } from "../AppContext/hook";
import { type Product } from "../AppContext/Context";
import "./index.css";
const Card = () => {
  const { items, onRemoveProduct } = useAppContext();
  const [deleted, setDeleted] = useState(false);

  const handleRemove = (id: number) => {
    onRemoveProduct(id);
    setDeleted(true);
  };
  return (
    <>
      <div>
        {items.map((item: Product) => (
          <div key={item.id} className="card">
            <div className="card-title">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
            <div className="card-content">
              <img src={item.image} />
            </div>
          </div>
        ))}

        <button onClick={() => handleRemove(item.id)}>Remove</button>
      </div>
    </>
  );
};

export default Card;
