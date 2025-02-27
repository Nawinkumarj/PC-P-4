import React from 'react'
import { assets } from "../assets/assets";

const AboutHead = ({heading}) => {
  return (
    <div className="aboutHead-main">
        <div className='aboutHead-design'>
            <h1>{heading}</h1>
      </div>
      
      <div className="aboutHead-img">
        <img src={assets.hammer1}/>
        </div>
    </div>
  )
}

export default AboutHead