import React from "react";
import { assets } from "../assets/assets";

const Appoinment = ({ onClose }) => {
  return (
    <div className="appoinmentContainer flex-center">
      <div className="appoinmentCard">
        <img src={assets.appoinmentBG} alt="" className="appoinmentBG" />
        <img onClick={onClose} src={assets.close} alt="" className="appoinmentClose" />
        <div className="appoinmentContent">
          <h2>BOOK AN APPOINMENT</h2>
          <form action="#">
            <div className="inputField">
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputField">
              <select name="service">
                <option value="">Select Service</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
              </select>
            </div>
            <div className="date-container">
              <select
                name="day"
                required
              >
                <option value="">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                name="month"
                required
              >
                <option value="">Month</option>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month, i) => (
                  <option key={i} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="year"
                required
              >
                <option value="">Year</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={2024 + i}>
                    {2024 + i}
                  </option>
                ))}
              </select>
            </div>
            <div className="inputField">
              <input type="email" placeholder="Email" />
            </div>
            <div className="inputField">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="inputField flex-center">
              <button value='submit'>Book Appoinment</button>
            </div>
            <div className='appoinmentLine'></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
