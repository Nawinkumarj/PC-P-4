import React from 'react'
import { assets } from '../assets/assets'

const ServiceFrame = ({name}) => {
  return (
    <div className='serviceFrameContainer'>
        <img src={assets.serviceFrame} alt='' />
        <div className='serviceText flex-center'>
            <img src={assets.serviceIcon} alt='' />
            <p>{name}</p>
        </div>
    </div>
  )
}

export default ServiceFrame