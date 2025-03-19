import React, { useState } from "react";
import { assets } from "../assets/assets";
import { serviceCard1Data } from "../__mock__data__/serviceCard1Data";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 9;

const Service1Card = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("none");
  const navigate = useNavigate();

    const handleKnowMore = (id) => {
      navigate(`/service1/${id}`);
    };

  const nextSlide = () => {
    if (startIndex + ITEMS_PER_PAGE < serviceCard1Data.length) {
      setSlideDirection("right");
      setStartIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  const prevSlide = () => {
    if (startIndex - ITEMS_PER_PAGE >= 0) {
      setSlideDirection("left");
      setStartIndex((prev) => prev - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="serviceCard1-container">
      {/* Main Cards Wrapper */}
      <div className="serviceCard1-mainCard">
        <div
          className={`serviceCard1-slider ${slideDirection}`}
          style={{
            // transform: `translateX(-${(startIndex / ITEMS_PER_PAGE) * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {serviceCard1Data
            .slice(startIndex, startIndex + ITEMS_PER_PAGE)
            .map((service) => (
              <div key={service.id} className="serviceCard1-main">
                <img className="serviceCard1-img" src={assets.service1vector} />
                <div className="serviceCard1-content">
                  <div className="serviceCard1-icon">
                    <img src={assets.hammer} alt="Service Icon" />
                  </div>
                  <div className="serviceCard1-para">
                    <h1>{service.title}</h1>
                    <p>{service.description}</p>
                  </div>
                  <div className="serviceCard1-buttons">
                    <div onClick={() => handleKnowMore(service.id)}>
                      <p>Know More</p>
                    </div>
                    {/* <div>
                      <p>Add to Cart</p>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="serviceCard1-arrow">
        <div
          className="serviceCard1-arrowLeft"
          onClick={prevSlide}
          style={{
            cursor: startIndex === 0 ? "not-allowed" : "pointer",
            opacity: startIndex === 0 ? 0.5 : 1,
          }}
        >
          <ChevronLeft size={34} />
        </div>
        <div
          className="serviceCard1-arrowRight"
          onClick={nextSlide}
          style={{
            cursor:
              startIndex + ITEMS_PER_PAGE >= serviceCard1Data.length
                ? "not-allowed"
                : "pointer",
            opacity:
              startIndex + ITEMS_PER_PAGE >= serviceCard1Data.length ? 0.5 : 1,
          }}
        >
          <ChevronRight size={34} />
        </div>
      </div>
    </div>
  );
};

export default Service1Card;
