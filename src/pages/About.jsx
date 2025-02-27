import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";
import AboutHead from "../components/AboutHead";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-gsap",
      start: "top top",
      end: "+=200%",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        // Get progress (0 to 1)
        const progress = self.progress;

        // Determine which book to show based on scroll progress
        if (progress < 0.3) {
          toggleBookVisibility(1);
        } else if (progress < 0.6) {
          toggleBookVisibility(2);
        } else if (progress < 0.9) {
          toggleBookVisibility(3);
        } else {
          toggleBookVisibility(0); // Closed book when fully scrolled
        }
      },
    },
  });

  timeline
    .from(".animation1-main", {
      x: "100%",
      y: "-100%",
      opacity: 0,
      duration: 1,
    })
    .to(".animation1-main", { x: "0%", y: "0%", opacity: 1, duration: 1 });

  timeline
    .from(".animation2-main", { x: "-100%", opacity: 0, duration: 1 })
    .to(".animation2-main", { x: "0%", opacity: 1, duration: 1 });

  timeline
    .from(".animation3-main", { x: "100%", y: "100%", opacity: 0, duration: 1 })
    .to(".animation3-main", { x: "0%", y: "0%", opacity: 1, duration: 1 });

  timeline.to(".animation4-main", { opacity: 1, duration: 1 });

  const toggleBookVisibility = (visibleIndex) => {
    const books = document.querySelectorAll(".animation4-main img");
    books.forEach((book, index) => {
      book.style.display = index === visibleIndex ? "block" : "none";
    });
  };

  // Set initial state to closed book
  toggleBookVisibility(0);

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);




  return (
    <div className="about-container">
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
      <div className="about-main">
        <div className="about-head">
          <div className="about-head-bg">
            <img src="https://media.istockphoto.com/id/1097811822/photo/bookshelf-of-irish-legal-books.jpg?s=612x612&w=0&k=20&c=8otSyGSVWUIOn6s8Bb_gXBfw_UqmZKrtyOCkpAmmzrc=" />
          </div>
          <div className="abouthead-content-main">
            <div className="abouthead-content">
              <h1>
                Prime counsel:
                <br />
                &quot;Beyond legal, your prime advantage&quot;
              </h1>
            </div>
          </div>
          <div className="about-statue">
            <img src={assets.statue} />
            <h1>About our company</h1>
          </div>
          <div className="statue-fog">
            <img src={assets.fog} alt="fog" />
          </div>
        </div>
        <div className="about-section">
          <div className="about-section-head">
            <AboutHead heading={"what the company does"} />
          </div>
        
          <div className="about-section1">
            <div className="section1-img">
              <img src="https://media.istockphoto.com/id/185286896/photo/gavel.jpg?s=612x612&w=0&k=20&c=sFBzd3rVuiojrAFoSOOtyotiEeAJZbEyfzFLt4QI_pQ=" />
            </div>
            <div className="section1-content">
              <div className="section1-para">
                <p>
                  <span className="section1-quote">&#10075;&#10075;</span>
                    At Prime Counsel Solutions, we specialize in providing comprehensive legal and
                    compliance services specified to businesses of all sizes. From startups to MSMEs and large
                    enterprises, we assist organizations in handling corporate law, regulatory compliance, and risk
                    management. Whether it’s contract drafting, litigation support, or KYC AML compliance, our
                    services ensure seamless legal adherence while mitigating risks and optimizing business
                    operations.
                </p>
              </div>
            </div>
          </div>

          <div className="about-section2">
            <div className="section2-content">
              <div className="section2-para">
                <p>
                With the growing complexities of global regulations, businesses must prioritize compliance
                  services to avoid financial risks and legal penalties. Our expertise spans fintech, MSMEs,
                  healthcare, real estate, manufacturing, and financial institutions. We provide proactive legal
                  audits, due diligence, AML services, and compliance advisory to help businesses stay ahead.
                  Our AML screening tools assist organizations in detecting suspicious transactions, ensuring
                  complete regulatory compliance.
                </p>
                <p>
                At the core of our approach is a commitment to accuracy, transparency, and client success.
                Our team of legal professionals and compliance specialists works closely with businesses to
                provide customized risk assessments, regulatory training, and policy development. Whether you
                need KYC compliance support, AML verification, or industry-specific compliance solutions,
                Prime Counsel Solutions ensures your business remains legally secure and future-ready.
                </p>
              </div>
            </div>
            <div className="section2-img">
              <img src="https://media.istockphoto.com/id/185286896/photo/gavel.jpg?s=612x612&w=0&k=20&c=sFBzd3rVuiojrAFoSOOtyotiEeAJZbEyfzFLt4QI_pQ=" />
            </div>
          </div>
        </div>

        <div className="about-gsap">
          <div className="gsap-head">
            <AboutHead heading={"why to choose prime counsel :"} />
          </div>
          <div className="gsap-animation">
            <div className="gsap-animation1">
              <div className="animation1-main">
                <div className="animation1-number">
                  <p>1</p>
                </div>
                <div className="animation-content">
                  <h1>Expertise Across Industries</h1>
                  <p>
                  With in-depth knowledge of legal frameworks and compliance as a service, we help businesses
                  stay secure, compliant, and operationally efficient.
                  </p>
                </div>
              </div>
            </div>
            <div className="gsap-animation2">
              <div className="animation2-main">
                <div className="animation1-number">
                  <p>2</p>
                </div>
                <div className="animation-content">
                  <h1>Compliance Solutions</h1>
                  <p>
                  We offer customized KYC AML services, labor law compliance, and risk management solutions,
                  ensuring regulatory alignment based on industry-specific needs.
                  </p>
                </div>
              </div>
            </div>
            <div className="gsap-animation3">
              <div className="animation3-main">
                <div className="animation1-number">
                  <p>3</p>
                </div>
                <div className="animation-content">
                  <h1>Client Success</h1>
                  <p>
                  We have successfully guided MSMEs, startups, and large enterprises through legal
                  complexities, offering services that reduce risk and enhance business growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="gsap-animation4">
              <div className="animation4-main">
                <img className="animation1-img0" src={assets.bookClose} />
                <img
                  className="animation1-img1"
                  src={assets.openBook1}
                  style={{ display: "none" }}
                />
                <img
                  className="animation1-img2"
                  src={assets.openBook2}
                  style={{ display: "none" }}
                />
                <img
                  className="animation1-img3"
                  src={assets.openBook3}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;