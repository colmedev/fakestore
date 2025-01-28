import { AppProvider } from "./AppContext";
import Search from "./ProductForm/ProductForm";
import Card from "./ProductListItem/ProductListItem";

const Cart = () => {
  return (
    <AppProvider>
      <Search />
      <Card />
    </AppProvider>
  );
};

export default Cart;
