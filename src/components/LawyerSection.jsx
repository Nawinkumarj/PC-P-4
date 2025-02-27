import React from 'react'
import { assets } from '../assets/assets';
import LawyerCard from './LawyerCard';

const LawyerSection = () => {
  return (
    <div
      className="lawyerSection-conatiner"
      style={{ backgroundImage: `url(${assets.teamBanner})` }}
    >
      <div className="lawyerSection-main">
        <div className="lawyersection-content">
          <p>
            Lorem ipsum dolor sit amet. Nam libero quos ut tempore deserunt id
            consequuntur nihil ut dolorum accusamus. Aut ipsa enim sit culpa
            similique sed repudiandae ipsum.v
          </p>
        </div>
        <div>
          <LawyerCard />
        </div>
      </div>
    </div>
  );
}

export default LawyerSection