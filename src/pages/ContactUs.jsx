import React from "react";
import SectionTitle from "../components/SectionTitle";
import { assets } from "../assets/assets";

const ContactUs = () => {
  return (
    <div>
      <SectionTitle title={"contact us"} />

      <div className="contactContainer">
        <img src={assets.contactBG} alt="" className="contactBgImg" />
        <div className="contactForm">
          <form action="#">
            <input type="text" placeholder="Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Message Here"></textarea>
            <div className="contactBtn flex-center">
              <button value="submit">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="contactFormBG"></div>
      </div>

      <div className="contactInfoContainer flex-center">
        <img src={assets.mailLetter} alt="" className="mailLetter" />
        <div className="bottom flex-center">
          <div className='oldPostContainer'>
            <img src={assets.oldPostCards} alt="" className="oldPostCard" />
          </div>
          <div className="socialMediaList">
            <div className="flex-center">
              <img src={assets.linkedinIcon} alt="" />
              <a href="#">@primecounselsolutions</a>
            </div>
            <div className="flex-center">
              <img src={assets.facebookIcon} alt="" />
              <a href="#">@primecounselsolutions</a>
            </div>
            <div className="flex-center">
              <img src={assets.instagramIcon} alt="" />
              <a href="#">@primecounselsolutions</a>
            </div>
          </div>
        </div>

        <div className='socialMediaSm'>
          <div>
            <img src={assets.linkedinIcon} alt="" />
          </div>
          <div>
            <img src={assets.facebookIcon} alt="" />
          </div>
          <div>
            <img src={assets.instagramIcon} alt="" />
          </div>
        </div>

      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20867324999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1739358481640!5m2!1sen!2sin"
        height="650"
        style={{ border: "0", width: "100%" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactUs;
