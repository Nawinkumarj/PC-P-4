import React from 'react'
import Banner from '../components/Banner'
import TrainingCard from '../components/TrainingCard';
import Service1Card from '../components/Service1Card';

const Training = () => {
  return (
    <div className="training-container">
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
      <div className="training-main">
        <div className="training-head">
          <h1>training's from prime counsel</h1>
        </div>
        <div className="training-content">
          <TrainingCard
            bgimage={
              "https://media.istockphoto.com/id/538203075/photo/close-up-of-law-reports.jpg?s=612x612&w=0&k=20&c=7NGIN6ALrjNowsxUlb2q8jjSjCDp5MMcOul8XfC5Nx4="
            }
            heading={"posh training"}
            content={
              "Prime Counsel Solutions offers comprehensive training programs aimed at preventing sexual harassment in the workplace"
            }
            path='/training1'
          />
          <TrainingCard
            bgimage={
              "https://media.istockphoto.com/id/538203075/photo/close-up-of-law-reports.jpg?s=612x612&w=0&k=20&c=7NGIN6ALrjNowsxUlb2q8jjSjCDp5MMcOul8XfC5Nx4="
            }
            heading={"posh training"}
            content={
              "Prime Counsel Solutions offers comprehensive training programs aimed at preventing sexual harassment in the workplace"
            }
            path='/training2'
          />
        </div>
      </div>
    </div>
  );
}

export default Training