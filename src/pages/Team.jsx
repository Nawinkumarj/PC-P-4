import React, {useState} from "react";
import Banner from "../components/Banner";
import TeamCarousel from "../components/TeamCarousel";
import LawyerSection from "../components/LawyerSection"

const Team = () => {
  const [activeSection, setActiveSection] = useState("leaders");
  
  return (
    <div className="team-container">
      {/* <Banner
        bannerImg={
          "https://t3.ftcdn.net/jpg/06/93/07/90/360_F_693079062_Dcec4wDZg6nnLwlpQpiOK9LyhtoA40Q0.jpg"
        }
        image={
          "https://media.istockphoto.com/id/1055009898/photo/themis-statue-symbol-of-law-and-justice.jpg?s=612x612&w=0&k=20&c=uZtRGIs0K3IEsQJNdwNlnxPxUZklnE8IByybhPKfZyw="
        }
        text={"legal process perfected we"}
        breakText={"deliver excellence"}
        highlightText={"every time"}
      /> */}
      <div className="team-main">
        <div className="team-nav">
          <div
            className={`team-nav1 ${
              activeSection === "leaders" ? "active" : ""
            }`}
            onClick={() => setActiveSection("leaders")}
          >
            <div className="nav-line1"></div>
            <div className="nav-line2"></div>
            <div className="nav-line3"></div>
            <div className="nav-line4"></div>
            <p>Our Leaders</p>
          </div>
          <div
            className={`team-nav2 ${
              activeSection === "lawyers" ? "active" : ""
            }`}
            onClick={() => setActiveSection("lawyers")}
          >
            <div className="nav-line1"></div>
            <div className="nav-line2"></div>
            <div className="nav-line3"></div>
            <div className="nav-line4"></div>
            <p>Our Lawyers</p>
          </div>
        </div>
        <div className="team-content">
          {activeSection === "leaders" ? (
            <div className="teamNav1-content">
              <TeamCarousel />
            </div>
          ) : (
              <div className="teamNav2-content">
                <LawyerSection/>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
