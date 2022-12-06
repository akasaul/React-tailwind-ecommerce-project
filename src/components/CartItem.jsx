import CloseIcon from "@mui/icons-material/Close";
const CartItem = ({ item }) => {
  return (
    <section className="p-2 flex  sm:flex-row bg-white items-center sm:items-stretch justify-evenly space-x-6">
      <div className="w-32">
        <img
          className="rounded-xl"
          style={{
            maxWidth: "100%",
            height: "auto",
            minWidth: "80px"
          }}
          src="https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt=""
        />
      </div>
      <div>
        <h2 className="font-bold sm:text-3xl text-lg">Men Gucc Luiv Carpet</h2>
        <h3>Category</h3>
        <div className="flex">
          <button className="bg-gray-300 font-bold px-2 py-1 m-2 focus:outline-none rounded-full">
            +
          </button>
          <button>2</button>
          <button className="bg-gray-300 font-bold px-2 py-1 m-2 focus:outline-none rounded-full">
            -
          </button>
        </div>
      </div>
      <div>
        <h3 className="sm:text-2xl text-lg font-bold mb-5">$2.99</h3>
        <button className="p-2 bg-red-500 text-white rounded-2xl">
          Remove
        </button>
      </div>
    </section>
  );
};

export default CartItem;
