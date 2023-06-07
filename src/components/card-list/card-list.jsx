import React, { Component } from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img4 from "../../images/img4.png";
import img5 from "../../images/img5.png";
import img6 from "../../images/img6.png";
import img7 from "../../images/img7.png";
import img8 from "../../images/img8.png";
import img9 from "../../images/img9.png";
import img10 from "../../images/img10.png";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
      <div className="flex flex-wrap mx-auto w-[50rem] justify-start  text-center gap-[1rem] mt-[2rem]">
        {monsters.map((monster) => (
          <div key={monster.id} className="w-[15rem] h-[22rem] border-2 rounded-lg border-gray-500 px-[2rem] mb-[0rem] flex justify-center flex-col">
            <h2 className="text-[25px] font-bold ">{monster.name}</h2>
            <h4 className="text-[16px] ">{monster.email}</h4>
            <img src={images[monster.id-1]} alt="monster_photo" className="h-[8rem] mx-auto mt-[2rem] " />
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
