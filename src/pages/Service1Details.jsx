import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import { assets } from "../assets/assets"
import { serviceCard1Data } from "../__mock__data__/serviceCard1Data";
import Service1PriceList from "../components/Service1PriceList";

const Service1Details = () => {
 const { id } = useParams();
 const service1 = serviceCard1Data.find((item) => item.id === Number(id));

 if (!service1) {
   return <h1>Service Not Found</h1>;
 }

  return (
    <div className="service1Detail-container">
      <Banner
        bannerImg={
          "https://t3.ftcdn.net/jpg/06/93/07/90/360_F_693079062_Dcec4wDZg6nnLwlpQpiOK9LyhtoA40Q0.jpg"
        }
        image={
          "https://media.istockphoto.com/id/1055009898/photo/themis-statue-symbol-of-law-and-justice.jpg?s=612x612&w=0&k=20&c=uZtRGIs0K3IEsQJNdwNlnxPxUZklnE8IByybhPKfZyw="
        }
        text={"legal process perfected we"}
        breakText={"deliver excellence"}
        highlightText={"every time"}
      />
      <div className="service1Detail-main">
        <div className="service1Detail-head">
          <h1>{service1.title}</h1>
        </div>
        <div className="service1Detail-section1">
          <div className="service1-section1Left">
            <h1>what & why</h1>
            <p>{service1.what1}</p>
            {service1.what2 && <p>{service1.what2}</p>}

          </div>
          <div className="service1-section1Right">
            <form className="service1-form">
              <div className="service1Detail-form">
                <h1>register your service</h1>

                <div className="service1Form-input">
                  <input placeholder="Name" type="name" />
                </div>
                <div className="service1Form-input">
                  <input placeholder="Phone Number" type="name" />
                </div>
                <div className="service1Form-input">
                  <input placeholder="City/Pincode" type="name" />
                </div>
                <div className="service1Form-button">
                  <button>book an appointment</button>
                </div>
                <div className="service1Form-dummy"></div>
              </div>
            </form>
          </div>
        </div>
        <div className="service1Detail-section2">
          <h1>benefits</h1>
          <p>{service1.benefits}</p>
        </div>
        <div className="service1Detail-section3">
          <h1>the review process may include tasks such as:</h1>
          <div className="service1-section3Main">
            <div className="service1-section3Left">
              {Object.keys(service1)
                .filter((key) => key.startsWith("para"))
                .map((key, index) => (
                  <p className="benefits-para"
                    key={index}
                    style={{ backgroundImage: `url(${assets.teamBg})` }}
                  >
                    {service1[key]}
                  </p>
                ))}
            </div>

            <div className="service1-section3Right">
              <img src={assets.event1} />
            </div>
          </div>
        </div>
        <div className="service1Detail-section4">
          <h1>Quote</h1>
          <div className="service1Detail-quote">
            <div className="quote-line1"></div>
            <div className="quote-line2"></div>
            <div className="quote-line3"></div>
            <div className="quote-line4"></div>
            <p>&quot;{service1.quote}&quot;</p>
          </div>
        </div>
        <div className="servicePriceListContainer">
          <Service1PriceList index={0} />
          <Service1PriceList index={1} />
          <Service1PriceList index={2} />
        </div>
      </div>
    </div>
  );
};

export default Service1Details;


