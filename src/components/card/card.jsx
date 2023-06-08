import { Component } from "react";
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

class Card extends Component {
  render() {
    const { id, email, name} = this.props.monster
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
      <div
        key={id}
        className="w-[15rem] h-[22rem] border-2 rounded-lg border-gray-500 px-[2rem] mb-[0rem] flex justify-center flex-col hover:scale-[1.02] ">
        <h2 className="text-[25px] font-bold ">{name}</h2>
        <h4 className="text-[16px] ">{email}</h4>
        <img
          src={images[id - 1]}
          alt={`monster ${name}`}
          className="h-[8rem] mx-auto mt-[2rem] "
        />
      </div>
    );
  }
}

export default Card;
