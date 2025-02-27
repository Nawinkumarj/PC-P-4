import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets'

const Navbar = ({ openAppoinment  }) => {
  return (
    <>
    <div className='navbarContainer'>
        <div className='topSection'>
          <NavLink to="/">
            <img src={assets.logo} alt="Logo" className="logo" />
          </NavLink>
        </div>

        <div className='bottomSection flex-center'>
          <NavLink to="/">
            <p>HOME</p>
          </NavLink>
          <NavLink to="/about">
            <p>ABOUT US</p>
          </NavLink>

          <div className="dropdown">
            <p className="serviceNav">SERVICES</p>
            <div className="serviceSubNav">
              <NavLink to="/service1">
                <p>Service 1</p>
              </NavLink>
              <NavLink to="/service2">
                <p>Service 2</p>
              </NavLink>
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

        <div className='centerSection flex-center'>
          <div className='leftSide'>
            <button onClick={openAppoinment}>Book an Appointment</button>
          </div>
          <div className='rightSide'>
            <button>WEBINAR</button>
          </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
