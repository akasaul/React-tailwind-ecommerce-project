import { useContext } from "react";
import { ShopItems } from "../context/context";
import CartItem from "../components/CartItem";
import CardList from "../components/CardList";
const Cart = () => {
  const { cart } = useContext(ShopItems);
  return <section></section>;
};

export default Cart;
