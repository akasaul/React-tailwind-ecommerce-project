import CardList from "../components/CardList";
import { ShopItems } from "../context/context";
import { useContext } from "react";

const Shop = () => {
  const { items } = useContext(ShopItems);
  return (
    <div>
      Shop
      <CardList list={items} />
    </div>
  );
};

export default Shop;
