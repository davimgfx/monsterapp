import Card from "../card/card.jsx";

const CardList = ({ monsters }) => {
  return (
    <div className="flex flex-wrap mx-auto w-[50rem] justify-start  text-center gap-[1rem] mt-[2rem]">
      {monsters.map((monster, index) => {
        return <Card monster={monster} key={index} />;
      })}
    </div>
  );
};

export default CardList;
