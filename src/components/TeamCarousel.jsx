import { useState } from "react";
import { assets } from "../assets/assets";
import { ChevronUp, ChevronDown } from "lucide-react";
import teamData from "../__mock__data__/teamData";

const TeamCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitionState, setTransitionState] = useState("slide-in");

  const handleSlideChange = (newIndex) => {
    setTransitionState("slide-out");
    setTimeout(() => {
      setActiveIndex(newIndex);
      setTransitionState("slide-in");
    }, 500); // Matches the CSS transition duration
  };

  const handleUpClick = () => {
    handleSlideChange(
      (prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length
    );
  };

  const handleDownClick = () => {
    handleSlideChange((prevIndex) => (prevIndex + 1) % teamData.length);
  };

  const getVisibleThumbnails = () => {
    const prevIndex = (activeIndex - 1 + teamData.length) % teamData.length;
    const nextIndex = (activeIndex + 1) % teamData.length;
    return [teamData[prevIndex], teamData[activeIndex], teamData[nextIndex]];
  };

  const visibleThumbnails = getVisibleThumbnails();

  return (
    <div
      className="teamLeaders-container"
      style={{ backgroundImage: `url(${assets.teamBanner})` }}
    >
      <div className="teamlead-main">
        <div className="teamlead-members">
          {/* Up Arrow */}
          <button className="arrow-button" onClick={handleUpClick}>
            <ChevronUp size={34} />
          </button>

          {/* Display only 3 thumbnails */}
          {visibleThumbnails.map((member, index) => {
            const isActive = member.image === teamData[activeIndex].image;

            return (
              <div
                key={index}
                className={`teamlead-thumbnail ${isActive ? "active" : ""}`}
                onClick={() =>
                  handleSlideChange(
                    (activeIndex - 1 + index + teamData.length) %
                      teamData.length
                  )
                }
              >
                <img src={member.image} alt={member.name} />
              </div>
            );
          })}

          {/* Down Arrow */}
          <button className="arrow-button" onClick={handleDownClick}>
            <ChevronDown size={34} />
          </button>
        </div>

        {/* Active Member Display */}
        <div className="teamlead-active-member-main">
          <div className="teamlead-border"></div>
          <div className="teamlead-border1"></div>
          <div className="teamlead-active-role">
            <h1>{teamData[activeIndex].name}</h1>
            <p>{teamData[activeIndex].role}</p>
          </div>
          <div className="teamlead-active-member">
            <img
              src={teamData[activeIndex].image}
              alt={`Active Team Member ${activeIndex + 1}`}
            />
          </div>
        </div>

        {/* Active Member Content */}
        <div className={`teamlead-active-content ${transitionState}`}>
          <h1>{teamData[activeIndex].name}</h1>
          <h2>{teamData[activeIndex].role}</h2>
          <p>{teamData[activeIndex].description1}</p>
          <p>{teamData[activeIndex].description2}</p>
          {teamData[activeIndex].description3 && (
            <p>{teamData[activeIndex].description3}</p>
          )}
          {teamData[activeIndex].description4 && (
            <p>{teamData[activeIndex].description4}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
