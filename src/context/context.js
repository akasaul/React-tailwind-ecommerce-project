import { createContext } from "react";
import ShopData from "../data/ShopData";
import { useState } from "react";

export const ShopItems = createContext();

export const ShopItemsContext = ({ children }) => {
  const [items, setItems] = useState(ShopData);
  const [cart, setCart] = useState([]);
  let [cartCount, setCartCount] = useState(0);
  return (
    <ShopItems.Provider
      value={{ items, cart, setCart, cartCount, setCartCount }}
    >
      {children}
    </ShopItems.Provider>
  );
};
