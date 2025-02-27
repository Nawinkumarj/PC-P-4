import React from 'react'
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const TrainingCard = ({bgimage, heading, content, path}) => {
  return (
    <div className="trainingCard-container">
      <div className="trainingCard-main">
        <div className="trainingCard-image">
          <img src={bgimage} />
        </div>

        <div className="trainingCard-content">
          <div className="trainingCard-dummy">
            <div className="trainingCard-head">
              <img src={assets.bulp} />
              <p>Training</p>
            </div>
            <div className="trainingCard-heading">
              <h1>{heading}</h1>
              <h2>{content}........</h2>
              <NavLink to={path}><p>Read more</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard