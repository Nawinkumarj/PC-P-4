import React from "react";
import { useParams } from "react-router-dom";
import service1Prices from "../__mock__data__/Service1Prices";
import { assets } from "../assets/assets";
import { Check } from "lucide-react";

const Service1PriceList = ({ index }) => {
  const { id } = useParams();
  const prices = service1Prices[id] || [];

  if (!prices[index]) {
    return <p>No pricing available for this tier.</p>;
  }

  const price = prices[index];

  return (
    <div className="price1ListContainer">
      <img src={assets.teamBg} alt="" className="price1ListBG" />
      <div className="price1ListContent">
        <div className="top1 flex-center">
          <h1>{price.name}</h1>
          {/* <div>Best offer</div> */}
        </div>
        <p>{price.description}</p>
        <p className="price1">
          <span> &#8377; {price.price}</span> / mo
        </p>
        {/* <div className="price1Line"></div> */}
        <div className="specList1Container">
          {price.specPoints &&
            price.specPoints.map((point, index) => (
              <div key={index}>
                <h1><Check/></h1>
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

export default Service1PriceList;
