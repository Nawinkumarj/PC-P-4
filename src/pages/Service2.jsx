import React from "react";
import { assets } from "../assets/assets";
import AboutHead from "../components/AboutHead";
import Service2Card from '../components/Service2Card';
import service2 from "../__mock__data__/Service2";

const Service2 = () => {
  return (
    <div className="service2Container">
      <div className="heading">
        <AboutHead heading={"loream ipsum dolor sit amet"} />
      </div>
      <div className="service2Banner">
        <img src={assets.Service2BannerBG} alt="" className='Service2BannerBG' />
        <div className='flex-center service2BannerContent'>
          <div className='left'>
            <img src={assets.event1} alt="" />
          </div>
          <div>
            <h1>LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit amet. Qui eaque vero et minima perferendis ut minima dicta est veritatis fugit? Ex laudantium illum et rerum voluptates ut quam amet aut maiores cupiditate. </p>
          </div>
        </div>
      </div>

      <div className="service2List">
        {service2.map((service2) => (
          <Service2Card key={service2.id} service2={service2} />
        ))}
      </div>
    </div>
  );
};

export default Service2;
