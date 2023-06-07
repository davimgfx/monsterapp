import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => (
          <div key={monster.id} >
              <h2 >{monster.name}</h2>
              <h4 className="text-[16px]">{monster.email}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
