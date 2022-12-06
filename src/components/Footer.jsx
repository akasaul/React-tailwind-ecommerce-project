import NavLogo from "./NavLogo";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper mx-auto bg-white flex justify-evenly space-y-6 sm:space-y-0  px-6 py-3 mt-6 flex-col sm:flex-row  border-t-2">
        <div
          className="flex flex-col space-y-4"
          style={{
            maxWidth: "25rem"
          }}
        >
          <NavLogo />
          <p className="opacity-50">
            Fashion is a popular aesthetic expression at a particular time ,
            place and in specific context, specially in clothing, footwear,
            lifestyle, accessories and make up.
          </p>
        </div>

        <ul className="flex flex-col space-y-3">
          <h2 className="text-2xl font-bold">Hot Links</h2>
          <Link to="/">
            <li className="text-lg opacity-50">Home</li>
          </Link>
          <Link to="/shop">
            <li className="text-lg opacity-50">Shop</li>
          </Link>
          <Link to="/cart">
            <li className="text-lg opacity-50">Cart</li>
          </Link>
        </ul>
      </div>

      <div className="bg-gray-300 flex justify-between p-5">
        <p className="text-lg opacity-75">
          &copy; Clay Shop all Rights reserved
        </p>
        <div className="flex items-center space-x-3">
          <FacebookIcon />
          <GitHubIcon />
          <TwitterIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
