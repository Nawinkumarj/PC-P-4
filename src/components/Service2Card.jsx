import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Service2Card = ({ service2 }) => {
  return (
    <div className="serviceCardContainer">
      <img src={assets.service2CardBG} alt="" className="serviceCardBG" />
      <div className="serviceCardHoverBG"></div>
      <div className="serviceCardContent flex-center">
        <img src={assets.close} alt="" className="" />
        <h1>{service2.name}</h1>
        <button className="readMoreBtn">READ MORE</button>
        <div className="hoverContent">
          <p>
            {service2.whatDesc
              ? `${service2.whatDesc.substring(0, 100)}...`
              : "No description available."}
          </p>

          <div className="serviceBtnContainer flex-center">
            <Link to={`/services/${service2.id}`}>
              <button className="left">READ MORE</button>
            </Link>
            <Link >
              <button className="right">Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service2Card;
