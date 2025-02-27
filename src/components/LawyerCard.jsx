import React from "react";
import { assets } from "../assets/assets";
import lawyers from "../__mock__data__/lawyers"




const LawyerCard = () => {
  return (
    <div className="lawyer-container-wrapper">
      {lawyers.map((lawyer) => (
        <div
          key={lawyer.id}
          className="lawyer-container"
          style={{ backgroundImage: `url(${assets.teamBg})` }}
        >
          <div className="lawyer-main">
            <div className="lawyer-logo">
              <img src={assets.pcLogo} alt={`Logo`} />
            </div>
            <div className="lawyer-img">
              <img src={lawyer.image} alt={lawyer.name} />
            </div>

            <div className="lawyer-content">
              <h1>{lawyer.name}</h1>
              <p>{lawyer.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LawyerCard;
