import Hero from "../components/Hero";
import Card from "../components/Card";
import YouMayLike from "../components/YouMayLike";
import Footer from "../components/Footer";
import { useContext } from "react";
import { ShopItems } from "../context/context";
import CardList from "../components/CardList";

const Home = () => {
  const { items } = useContext(ShopItems);
  return (
    <div className="">
      <Hero />
      <YouMayLike />
      <CardList list={items.slice(0, 3)} />
    </div>
  );
};

export default Home;
