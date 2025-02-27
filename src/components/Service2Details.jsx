import React from "react";
import { useParams } from "react-router-dom";
import service2 from "../__mock__data__/Service2";
import { assets } from "../assets/assets";
import Service2PriceList from "./Service2PriceList";

const Service2Details = () => {
  const { id } = useParams();
  const service = service2.find((item) => item.id.toString() === id);

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <div className="service2DetailsContainer">
      <h1 className="serviceName">{service.name}</h1>
      <div className="whatContainer">
        <div className="leftSide">
          <h1>WHAT</h1>
          <p>{service.whatDesc}</p>
        </div>
        <div className="rightSide">
          <img
            src={assets.serviceDetailsBG}
            alt=""
            className="serviceDetailsBG"
          />
          <div className="serviceDetailsForm">
            <h1>Register Your Service</h1>
            <form action="#" className="flex-center">
              <input type="text" placeholder="Name" />
              <select name="service">
                <option value="">Select Service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                maxLength={10}
                minLength={10}
              />
              <div className="flex-center">
                <button value="submit">Book Appoinment</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="whyContainer">
        <h1>WHY</h1>
        <p>
          {service.whyDesc.split("\n\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
              <br />
            </span>
          ))}
        </p>
      </div>

      <div className="serviceDetailsQuote">
        <h1>QUOTE</h1>
        <div className="serviceDetailsQuoteCard flex-center">
          <img src={assets.Service2BannerBG} alt="" />
          <h1>{service.quote}</h1>
        </div>
      </div>

      <div className="servicePriceListContainer">
        <Service2PriceList index={0} />
        <Service2PriceList index={1} />
        <Service2PriceList index={2} />
      </div>
    </div>
  );
};

export default Service2Details;
