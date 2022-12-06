import { Link } from "react-router-dom";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const NavLogo = () => {
  return (
    <div className="flex items-center">
      {/* Nav logo  */}
      <Link to="/">
        <StorefrontOutlinedIcon fontSize="large" />
      </Link>
      <Link to="/">
        <h4 className="ml-2 text-lg font-bold">Clay Shop</h4>
      </Link>
    </div>
  );
};

export default NavLogo;
