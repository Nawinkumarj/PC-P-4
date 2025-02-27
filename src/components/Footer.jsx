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
          src="https://s3-alpha-sig.figma.com/img/5d95/0d60/def726f60ff92d04fe41ad02ecee8eaf?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qWqtSaCrPb0iZRYQm8X3RqF2aC5eQCCCh-iHBHnfEJ4rssE9LI94lpSaMX0Suuq1tTCn~OaT~HUdVMUIWKuFW1Gqd3VGRcEz9l4ZhUsw5VQw-LBPrntrobweYSQ-bfdy5DSnUgFLnWjfoyVDWN5b1XRBHKmgsaZY7dyBQ7MEmx76tWSkAIReNUXPC2vM05y0lM5RiSoKJxU~WSMcTNbnZi9-ecjSDkdgVoZz5RJn9amWXTqEi8eRh02hggiPP3-WCGBZLEDmmKaNpPHAZpFVCWJ9JF823Kjv3ciOOfE6WMBKmKwGc8bqLzYdu4XAvGjFPhOhn4rwcNDGNwh9yCyMLw__"
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
                <h1>Stay in the know</h1>
                <div className="footer-message">
                  <form>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div>
                <p>Copyright © 2024 All Rights Reserved</p>
              </div>
            </div>
            <div className="footer-navigations">
              <div className="foot-nav">
                <div className="foot-nav1">
                  <h1>Company</h1>
                  <Link to="/">
                    <p>
                      <MoveRight />
                      Home
                    </p>
                  </Link>
                  <Link to="/about">
                    <p>
                      <MoveRight />
                      About Us
                    </p>
                  </Link>
                  <Link to="/service1">
                    <p>
                      <MoveRight />
                      Service
                    </p>
                  </Link>
                </div>
                <div className="foot-nav2">
                  <h1>Contact</h1>
                  <p>
                    <MoveRight />
                    8925863894
                  </p>
                  <p>
                    <MoveRight />
                    info@primecounselsolutions.com
                  </p>
                  <p>
                    <MoveRight />
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
