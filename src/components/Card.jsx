import Button from "./Button";
const Card = ({ data }) => {
  return (
    <section className="w-64 rounded-t-xl bg-white overflow-hidden shadow-lg">
      <img
        className="max-w-full"
        src={data.img[0]}
        alt={data.desc}
        style={{
          height: "250px",
          width: "100%"
        }}
      />
      <article className="p-3 flex flex-col gap-2 leading-normal">
        <h2 className="text-3xl text-cyan-900">
          {data.name.length > 15 ? `${data.name.substr(0, 15)}..` : data.name}
        </h2>
        <p className="opacity-75">
          {data.desc.length > 50 ? `${data.desc.substr(0, 50)}..` : data.desc}
        </p>
        <div className="flex justify-between p-2">
          <h3 className="text-3xl">${data.price}</h3>
          <Button text="Shop Now" id={data.id} />
        </div>
      </article>
    </section>
  );
};
export default Card;
