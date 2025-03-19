import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = ({ openAppoinment }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeService, setActiveService] = useState(null); // Track active sub-container
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    setActiveService(null); // Reset service selection
  };

  const handleServiceClick = (service) => {
    setActiveService(service === activeService ? null : service);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setActiveService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navbarContainer">
        <div className="topSection">
          <NavLink to="/">
            <img src={assets.logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        <div className="bottomSection flex-center">
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/about">
            <p>ABOUT US</p>
          </NavLink>

          {/* SERVICES DROPDOWN */}
          <div className="dropdown" ref={dropdownRef}>
            <p className="serviceNav" onClick={() => toggleDropdown("services")}>
              SERVICES &#9661;
            </p>
            <div
              className={`serviceSubNav ${
                openDropdown === "services" ? "show" : "hide"
              }`}
              style={{
                width:
                  activeService === "service1"
                    ? "500px"
                    : activeService === "service2"
                    ? "500px"
                    : activeService === "service3"
                    ? "800px"
                    : "250px",
              }}
            >
              <div className="subContainer">
                <p>Service</p>
                <div
                  className="serviceLinks"
                  onClick={() => handleServiceClick("service1")}
                >
                  <div className="whiteBox"></div>
                  <div>
                    <p>SERVICE 1</p>
                    <span>Lorem Ipsum Dolor Sit Amet.</span>
                  </div>
                </div>
                <div
                  className="serviceLinks"
                  onClick={() => handleServiceClick("service2")}
                >
                  <div className="whiteBox"></div>
                  <div>
                    <p>SERVICE 2</p>
                    <span>Lorem Ipsum Dolor Sit Amet.</span>
                  </div>
                </div>
                <div
                  className="serviceLinks"
                  onClick={() => handleServiceClick("service3")}
                >
                  <div className="whiteBox"></div>
                  <div>
                    <p>SERVICE 3</p>
                    <span>Lorem Ipsum Dolor Sit Amet.</span>
                  </div>
                </div>
              </div>

              {/* (Service 1 Details) */}
              <div
                className={`subContainer middle ${
                  activeService === "service1" ? "show" : "hide"
                }`}
              >
                <p>Service 1</p>
                {[...Array(7)].map((_, i) => (
                  <div className="serviceLinks" key={i}>
                    <div className="whiteBox"></div>
                    <div>
                      <p>SERVICE</p>
                      <span>Lorem Ipsum Dolor Sit Amet.</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* (Service 2 Details) */}
              <div
                className={`subContainer last ${
                  activeService === "service2" ? "show" : "hide"
                }`}
              >
                <p>Service 2</p>
                {[...Array(6)].map((_, i) => (
                  <div className="serviceLinks" key={i}>
                    <div className="whiteBox"></div>
                    <div>
                      <p>SERVICE</p>
                      <span>Lorem Ipsum Dolor Sit Amet.</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* (Service 3 Details) */}
              <div
                className={`subContainer last ${
                  activeService === "service3" ? "show" : "hide"
                }`}
              >
                <p>Service 3</p>
                <div className='serviceSubNavTest'>
                <div className="left">
                      <div className="inside flex-center">
                        <img src={assets.ServiceInsideIcon} alt="" />
                        <p>Lorem Ipsum Dolor</p>
                        <span>&#9656;</span>
                      </div>
                      <div className="inside flex-center">
                        <img src={assets.ServiceInsideIcon} alt="" />
                        <p>Lorem Ipsum Dolor</p>
                        <span>&#9656;</span>
                      </div>
                      <div className="inside flex-center">
                        <img src={assets.ServiceInsideIcon} alt="" />
                        <p>Lorem Ipsum Dolor</p>
                        <span>&#9656;</span>
                      </div>
                      <div className="inside flex-center">
                        <img src={assets.ServiceInsideIcon} alt="" />
                        <p>Lorem Ipsum Dolor</p>
                        <span>&#9656;</span>
                      </div>
                      <div className="inside flex-center">
                        <img src={assets.ServiceInsideIcon} alt="" />
                        <p>Lorem Ipsum Dolor</p>
                        <span>&#9656;</span>
                      </div>
                    </div>
                    <div className="right">
                      <h1>Lorem Ipsum Dolor</h1>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                      <div className="subInside flex-center">
                        <div className="circle"></div>
                        <p>Et Sunt Voluptas</p>
                      </div>
                    </div>
                    </div>
              </div>

            </div>
          </div>

          <NavLink to="/training">
            <p>TRAINING</p>
          </NavLink>
          <NavLink to="/our-team">
            <p>OUR TEAM</p>
          </NavLink>
          <NavLink to="/contact">
            <p>CONTACTS</p>
          </NavLink>
        </div>

        <div className="centerSection flex-center">
          <div className="leftSide">
            <button onClick={openAppoinment}>Book an Appointment</button>
          </div>
          <div className="rightSide">
            <button>WEBINAR</button>
          </div>
        </div>
      </div>

      <div className="smNavbar flex-center"></div>
    </>
  );
};

export default Navbar;
