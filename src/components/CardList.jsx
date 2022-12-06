import Card from "../components/Card";
const CardList = ({ list }) => {
  return (
    <div
      className="grid mx-auto px-4 justify-items-center"
      style={{
        maxWidth: "1150px",
        gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr))",
        gridAutoRows: "450px",
        gap: "1rem"
      }}
    >
      {list.map(item => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardList;
