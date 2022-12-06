import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLogo from "./NavLogo";
import { Badge } from "@mui/material";
import { ShopItems } from "../context/context";
import { useContext } from "react";

const Navbar = () => {
  const { cart, cartCount } = useContext(ShopItems);
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="p-2 border shadow bg-white">
      {/* Nav container  */}
      <div
        className="container mx-auto flex justify-between items-center"
        styles={{
          overflow: "hidden"
        }}
      >
        {/* Nav logo  */}
        <NavLogo />
        {/* Nav links mobile */}
        <ul
          className="flex justify-center bg-white text-center shadow flex-col absolute bg-white sm:hidden w-full"
          style={{
            backgroundColor: "white",
            top: navbarOpen ? "4rem" : "-100%",
            transition: "all 500ms ease-in-out",
            zIndex: 2
          }}
        >
          <Link to="/" onClick={() => setNavbarOpen(false)}>
            <li className="p-4 hover:bg-red-100">Home</li>
          </Link>
          <Link to="/shop" onClick={() => setNavbarOpen(false)}>
            <li className="p-4 hover:bg-red-100">Shop</li>
          </Link>
          <Link to="/cart" onClick={() => setNavbarOpen(false)}>
            <li className="p-4 hover:bg-red-100">
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </li>
          </Link>
          <li className="p-4">
            {/* Nav search mobile  */}
            <div className="relative w-32 mx-auto">
              <input
                type="text"
                className="border rounded-lg p-2 focus:outline-none focus:border-2 focus:border-red-300"
                placeholder="Search item"
              />
              <SearchOutlinedIcon
                className="absolute opacity-50"
                sx={{
                  left: "165px",
                  top: "10px"
                }}
              />
            </div>
          </li>
        </ul>
        {/* Nav links desktop */}
        <ul className="flex hidden sm:flex justify-center flex-1">
          <Link to="/">
            <li className="p-4">Home</li>
          </Link>
          <Link to="/shop">
            <li className="p-4">Shop</li>
          </Link>
          <Link to="/cart">
            <li className="p-4">
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </li>
          </Link>
        </ul>
        {/* Nav search desktop  */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            className="border rounded-lg p-2 focus:outline-none focus:border-2 focus:border-red-300"
            placeholder="Search item"
          />
          <SearchOutlinedIcon
            className="absolute opacity-50"
            sx={{
              right: "5px",
              top: "10px"
            }}
          />
        </div>
        {/* Nav Menu  */}
        <div
          className="sm:hidden"
          onClick={() => setNavbarOpen(prevState => !prevState)}
        >
          <MenuOutlinedIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
