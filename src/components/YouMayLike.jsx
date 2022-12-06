import CardList from "./Card";
import { ShopItems } from "../context/context";
import { useContext } from "react";

const YouMayLike = () => {
  const ShopData = useContext(ShopItems);
  return (
    <div className="justify-center mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ml-16 sm:ml-0 ml-12">
      {/* <CardList list={ShopData} /> */}
    </div>
  );
};
export default YouMayLike;
