import React from "react";
import CardFront from "../images/bg-card-front.png";
import CardBack from "../images/bg-card-back.png";

function Card(handleSubmit) {
  return (
    <div className="static">
      <div className="static grid">
        <svg
          className="absolute"
          width="84"
          height="47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff" />
          <path
            d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z"
            stroke="#fff"
          />
        </svg>
        <label className="absolute">{data?.name}</label>
        <img className="card-front" src={CardFront} />
      </div>
      <div className="static grid">
        <img src={CardBack} className="pl-8 pt-5" />
        <label className="absolute">064</label>
      </div>
    </div>
  );
}
export default Card;
