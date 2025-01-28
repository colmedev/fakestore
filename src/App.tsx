import Cart from "./components";
import { AppProvider } from "./components/AppContext/AppProvider";
import { Card } from "./components/ProductListItem/ProductListItem";
import "./App.css";
function App() {
  return (
    <AppProvider>
      <Cart />
    </AppProvider>
  );
}

export default App;
