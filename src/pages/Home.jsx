import React from "react";
import SectionTitle from "../components/SectionTitle";
import ServiceFrame from "../components/ServiceFrame";
import Banner from "../components/Banner";
import TestimonialSlider from "../components/TestimonialSlider";
import EventCard from "../components/EventCard";
import blogData from "../__mock__data__/blogData";
import { assets } from "../assets/assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  // pauseOnHover: false,
};

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="heroContainer">
        <img src={assets.HomeBanner} alt="" className="heroBanner" />
        <div className="heroContent flex-center">
          <div className="leftSide">
            <p>
              Legal & Compliance, <span>Perfectly Simplified.</span>
            </p>
          </div>
          <div className="rightSide flex-center">
            <h2>Lorem Ipsum is simply dummy text</h2>
            <p>
              At Prime Counsel Solutions, we provide expert legal and compliance
              services to help businesses navigate regulatory complexities with
              confidence. From legal documentation to KYC AML compliance, we
              ensure that you stay protected, compliant, and ahead in today’s
              dynamic business environment
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <div className="aboutUsContainer">
        <SectionTitle title={"about us"} />
        <div className="aboutUsImg">
          <img src={assets.AboutUs} alt="" className="oldPaper" />
          <div className="text">
            <p>
              Prime Counsel Solutions is a leading provider of legal and
              compliance services, dedicated to helping businesses maintain
              regulatory integrity. We specialize in legal document review,
              compliance audits, contract management, KYC AML solutions, and
              corporate training, ensuring that businesses stay secure and
              legally compliant. Whether you're a startup, MSME, or large
              enterprise, our services cater to industry-specific needs,
              enabling seamless compliance and risk management. From labor law
              compliance to AML verification and screening, we help
              organizations establish strong governance frameworks that drive
              long-term success.
            </p>
          </div>
          <img src={assets.fether} alt="" className="fether" />
        </div>
      </div>

      {/* SERVICE SECTION */}
      <div className="serviceSectionContainer">
        <SectionTitle title={"service"} />

        <div>
          <Link to='/service1'><ServiceFrame name={"Legal Service"}  /></Link>
          <Link to='/service2'><ServiceFrame name={"Compliance Service"} /></Link>
        </div>

        <img src={assets.serviceImg} alt="" className="serviceImg" />
      </div>

      {/* TESTTIMONIAL SECTION  */}
      <SectionTitle title={"testimonial"} />

      <div className="testimonialContainer">
        <p>
          At Prime Counsel Solutions, client satisfaction is at the core of
          everything we do. Our legal and compliance experts have successfully
          supported businesses across industries, ensuring regulatory adherence
          and risk mitigation. With our KYC and AML solutions, we help
          businesses prevent financial crimes, ensure due diligence, and
          maintain legal security. Our clients trust us for tailored compliance
          strategies, cutting-edge AML screening tools, and proactive risk
          management. See what our clients say about working with Prime Counsel
          Solutions!
        </p>

        {/* <TestimonialSlider /> */}
      </div>

      {/* EVENTS SECTION */}
      <div className="eventContainer">
        <SectionTitle title={"event"} />

        <Slider {...settings}>
          <div>
            <EventCard
              eventName="Soumex 2024 – MSME Global Expansion Event "
              eventContent="Prime Counsel Solutions participated in the Soumex 2024 International Exhibition, supporting 
MSMEs in navigating legal and compliance challenges while expanding into emerging markets. 
Our expert insights helped businesses understand regulatory frameworks and contract 
structuring for global trade. "
              eventImg={assets.event1}
            />
            <EventCard
              eventName="CFTI Legal Education Seminar"
              eventContent="We conducted a specialized legal training session for the Central Footwear Training Institute 
(CFTI), guiding students and entrepreneurs on business structuring, taxation, and intellectual 
property protection within the footwear and fashion industry."
              eventImg={assets.event1}
              reverse={"reverse"}
            />
            <EventCard
              eventName="Webinar on Digital Compliance & Risk Management"
              eventContent="In collaboration with industry leaders, we hosted an insightful webinar on KYC, AML, and 
regulatory compliance for fintech, NBFCs, and startups. Our session focused on risk mitigation 
strategies, digital fraud prevention, and the evolving regulatory landscape."
              eventImg={assets.event1}
            />
          </div>

          <div>
            <EventCard
              eventName="EVENT 4"
              eventContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              eventImg={assets.event1}
            />
            <EventCard
              eventName="EVENT 5"
              eventContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              eventImg={assets.event1}
              reverse={"reverse"}
            />
            <EventCard
              eventName="EVENT 6"
              eventContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              eventImg={assets.event1}
            />
          </div>
        </Slider>
      </div>

      {/* BLOG SECTION */}
      <SectionTitle title={"blogs"} />

      <div className="blogContainer">
        <div className="topSection flex-center">
          <div className="leftSide">
            <div className="top flex-center">
              <span></span>
              Legal Updates, Compliance, Trends & More.
            </div>
            <div className="bottom">
              <h1>Lorem ipsum</h1>
            </div>
          </div>

          <div className="rightSide">
            Staying updated on legal and compliance trends is critical for
            businesses. Our blog covers KYC AML best practices, compliance
            services insights, MSME regulations, labor law compliance, and AML
            screening tools. Explore our latest articles and stay ahead in a
            rapidly evolving regulatory landscape.
          </div>
        </div>

        <div className="bottomSection">
          {blogData.map((blog) => (
            <div key={blog.id}>
              <div className="top">
                <img src={blog.imgSrc} alt={blog.category} />
                <span className="flex-center">{blog.number}</span>
              </div>

              <div className="blogHightlight">
                <h1>{blog.category}</h1>
                <p>{blog.title}</p>
                <h3>{blog.date}</h3>
                <div className="btn">
                  <button>Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="blogLink flex-center">
          <a href="#">EXPLORE MORE &#8594; </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
