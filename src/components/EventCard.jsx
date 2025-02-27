import React from 'react'
import { assets } from '../assets/assets'


const EventCard = ({reverse, eventName, eventContent, eventImg}) => {
  return (
    <div className={`eventCard ${reverse}`}>
        <div className='leftSide'>
            <div className='innerSide'>
                <img src={eventImg} alt="" />
            </div>
        </div>

        <div className='rightSide'>
            <h1>{eventName}</h1>
            <p>{eventContent}</p>
        </div>
    </div>
  )
}

export default EventCard