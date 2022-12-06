import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      {/* Main Hero background Image  */}
      <div
        className="border"
        style={{
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          backgroundRepeat: "no-repeat",
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "left center"
        }}
      >
        {/* hero description  */}
        <div className="w-64 text-white m-16 sm:w-1/3 flex flex-col space-y-6 ">
          <h3 className="text-3xl uppercase font-bold ">
            Admire stylish clothes & looks
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ,
            incidunt placeat vel soluta eos.
          </p>
          <Link to="/shop">
            <button className="border-2 p-2 w-1/2 rounded-lg focus:outline-none">
              Shop now
            </button>
          </Link>
        </div>
      </div>
      {/* Grid section  */}
      <div className="container mx-auto my-16">
        <div className="grid grid-cols-2 gap-4">
          {/* Grid item  */}
          <div
            className="row-span-2 rounded-xl"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              height: "30rem"
            }}
          ></div>
          {/* Grid item  */}
          <div
            className="rounded-xl min-w-24"
            style={{
              background:
                "url('https://images.unsplash.com/photo-1574271143515-5cddf8da19be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover"
            }}
          ></div>
          {/* Grid item  */}
          <div
            className="rounded-xl min-w-24"
            style={{
              background:
                "url('https://plus.unsplash.com/premium_photo-1661274030066-09e7378fc470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center top ",
              backgroundSize: "cover"
            }}
          ></div>
          {/* You May Like  */}
          <h3 className="text-3xl text-start">You may like</h3>
        </div>
      </div>
    </>
  );
};

export default Hero;
