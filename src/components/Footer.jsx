import React from "react";
import { assets } from "../assets/assets";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-contain">
      <div className="footer-container">
        <img
          className="footer-container-img"
          src="https://media.istockphoto.com/id/1388548812/photo/lawyer-office.jpg?s=612x612&w=0&k=20&c=WbNvwVXJyya6OkeYWVe0yaHT8u1HM86-wUPYBvBAV6g="
        />
        <div className="foot-main">
          <div className="footer-main">
            <div className="foot-icons">
              <div className="social-icon">
                <div className="social-dummy1"></div>
                <img src={assets.fb} />
              </div>
              <div className="social-icon">
                <div className="social-dummy2"></div>
                <img src={assets.insta} />
              </div>
              <div className="social-icon">
                <div className="social-dummy3"></div>
                <img src={assets.linkin} />
              </div>
            </div>
            <div className="foot-content">
              <div className="footer-logo">
                <img src={assets.pcLogo} />
              </div>
              <div className="footer-connect">
                {/* <h1>Stay in the know</h1>
                <div className="footer-message">
                  <form>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div> */}
                <p>Copyright © 2024 All Rights Reserved</p>
              </div>
            </div>
            <div className="footer-navigations">
              <div className="foot-nav">
                <div className="foot-nav1">
                  <h1>Company</h1>
                  <Link to="/">
                    <p>
                      <MoveRight className="move-right-icon"  />
                      Home
                    </p>
                  </Link>
                  <Link to="/about">
                    <p>
                      <MoveRight className="move-right-icon"  />
                      About Us
                    </p>
                  </Link>
                  <Link to="/service1">
                    <p>
                      <MoveRight className="move-right-icon" />
                      Service
                    </p>
                  </Link>
                </div>
                <div className="foot-nav2">
                  <h1>Contact</h1>
                  <p>
                    <MoveRight className="move-right-icon" />
                    8925863894
                  </p>
                  <p>
                    <MoveRight className="move-right-icon"  />
                    info@primecounselsolutions.com
                  </p>
                  <p>
                    <MoveRight className="move-right-icon" />
                    Chennai
                  </p>
                </div>
              </div>
              <div className="footer-terms">
                <p>Terms of service</p>
                <p>Policy Service</p>
                <p>Cookies Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
