import React from "react";
import Service1Card from "../components/Service1Card";
import { assets } from "../assets/assets";
import AboutHead from "../components/AboutHead";
import Banner from "../components/Banner";

const Service1 = () => {
  return (
    <div className="service1-container">
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
      <div className="service1-main">
        <div className="service1-head">
            <div className="service1-top-head">
              <AboutHead heading={"loream ipsum dolor sit amet"} />
            </div>
          <div className="service1-top">
          
            <div className="service1-top-content">
              <p>
              We provide professional and vast legal services customized to protect businesses, mitigate
              risks, and ensure compliance with regulatory frameworks. Whether you're a startup, MSME, or a
              large corporation, steering legal complexities can be challenging. Our expert legal team
              specializes in contract management, litigation support, legal audits, intellectual property
              protection, and corporate advisory. We ensure businesses stay legally secure, resolve disputes
              efficiently, and maintain operational integrity. Our services are meticulated to industry-specific
              needs, making legal processes seamless and strategic.
              </p>
            </div>
          
          <div className="service1-img">
            <img src={assets.AboutUs} />
            </div>
            </div>
        </div>
        <div className="service1-content">
          <Service1Card />
        </div>
      </div>
    </div>
  );
};

export default Service1;
