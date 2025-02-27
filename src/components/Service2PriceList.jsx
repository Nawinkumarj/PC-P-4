import React from "react";
import { useParams } from "react-router-dom";
import service2Prices from "../__mock__data__/Service2Prices";
import { assets } from "../assets/assets";

const Service2PriceList = ({ index }) => {
  const { id } = useParams();
  const prices = service2Prices[id] || [];

  if (!prices[index]) {
    return <p>No pricing available for this tier.</p>;
  }

  const price = prices[index];

  return (
    <div className="priceListContainer">
      <img src={assets.service2CardBG} alt="" className="priceListBG" />
      <div className="priceListContent">
        <div className="top flex-center">
          <h1>{price.name}</h1>
          <div>Best offer</div>
        </div>
        <p>{price.description}</p>
        <p className="price">
          <span> &#8377; {price.price}</span> per month
        </p>
        <div className="priceLine"></div>
        <div className="specListContainer">
        {price.specPoints &&
            price.specPoints.map((point, index) => (
              <div key={index}>
                <img src={assets.priceTickicon} alt="" />
                <p>{point}</p>
              </div>
            ))}
        </div>
        <div className="flex-center">
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Service2PriceList;
