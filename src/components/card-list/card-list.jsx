import React, { Component } from "react";
import Card from "../card/card.jsx";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="flex flex-wrap mx-auto w-[50rem] justify-start  text-center gap-[1rem] mt-[2rem]">
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
