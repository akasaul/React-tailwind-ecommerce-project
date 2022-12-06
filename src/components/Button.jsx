import { Link } from "react-router-dom";
const Button = ({ text, id }) => {
  return (
    <Link
      to={"/shop/" + id}
      className="rounded px-3 py-2 bg-red-400 text-white hover:bg-white hover:text-red-400 hover:ouline-3 focus:outline-none hover:border-red-400"
    >
      {text}
    </Link>
  );
};
export default Button;
