import React from "react";
import Banner from "../components/Banner";
import { assets } from "../assets/assets";

const Training1 = () => {
  return (
    <div>
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

      <div className="trainingContainer2">
        <h1 className="heading">PREVENTION OF SEXUAL HARASSSMENT (POSH)</h1>
        <p className="trainingPara">
          POSH stands for Prevention of Sexual Harassment. It refers to the
          legal framework and regulations in place in India to prevent and
          address cases of sexual harassment in the workplace. The Sexual
          Harassment of Women at Workplace (Prevention, Prohibition and
          Redressal) Act, 2013, commonly known as the POSH Act, mandates
          organizations to create a safe and respectful work environment for all
          employees. Promoting a Safe and Inclusive Workplace POSH training is
          crucial as it educates employees on identifying, preventing, and
          addressing sexual harassment. It ensures compliance with legal
          requirements, fosters a respectful workplace culture, and enhances
          employee well-being and productivity.
        </p>

        <div className="t1-benefitContainer flex-center">
          <div className="t1-leftSide">
            <img src={assets.poshFrame} alt="" className="t1-benefitFrame" />
            <img src={assets.event1} alt="" className="t1-benefitImg" />
          </div>

          <div>
            <h1>what areas we focus on this training</h1>
          </div>
        </div>

        <div className="t1-focus">
          <div className="focus-heading">
            <h1>
              At Prime Counsel Solutions we provide Tailored Training Solutions,
              our POSH training is customized to meet the unique needs of each
              organization.<span className="focus-span"> We focus on:</span>
            </h1>
          </div>
          <div className="focus-content">
            <div>
              <div className="focus-img">
                <img src={assets.event1} />
              </div>
            </div>
            <div className="focus-content-para">
              <p style={{ backgroundImage: `url(${assets.teamBg})` }}>
                <span className="benefitText-bold">Legal Standards: </span>
                 Ensuring compliance with POSH laws and regulations.
              </p>
              <p style={{ backgroundImage: `url(${assets.teamBg})` }}>
                <span className="benefitText-bold">Prevention Strategies:</span>
                Educating employees on recognizing and preventing harassment.
              </p>
              <p style={{ backgroundImage: `url(${assets.teamBg})` }}>
                <span className="benefitText-bold">Reporting Mechanisms: </span>
                Establishing effective procedures for reporting incidents.
              </p>
              <p style={{ backgroundImage: `url(${assets.teamBg})` }}>
                <span className="benefitText-bold">
                  Investigation Techniques:
                </span>
                Equipping Internal Complaints Committees (ICCs) with skills for
                fair and impartial investigations.
              </p>
            </div>
          </div>
        </div>

        <div className="t1-benefitContain">
          <div className="t1-leftSide">
            <img src={assets.poshFrame} alt="" className="t1-benefitFrame" />
            <img src={assets.event1} alt="" className="t1-benefitImg" />
          </div>

          <div>
            <h1>what is unique in us</h1>
          </div>
        </div>

        <div className="focus-heading">
          <h1>
            Our commitment to excellence prime counsel solutions stands out in
            POSH training by:
          </h1>
        </div>
        <div
          className="t1-benefitContent"
          // style={{ backgroundImage: `url(${assets.benefitBG})` }}
        >
          <img src={assets.benefitBG} alt="" className="benefitBG" />
          <div className="t1-benefitText">
            <p>
              <span className="benefitText-bold">Customization: </span>
               Tailoring training programs to fit the specific organizational
              culture and requirements.
            </p>

            <p>
              <span className="benefitText-bold">Expertise: </span> Employing a
              team of seasoned professionals with extensive experience in
              employment law and workplace ethics.
            </p>

            <p>
              <span className="benefitText-bold">Comprehensive Support: </span>
               Providing ongoing consultation and support to ICCs, ensuring they
              confidently navigate complex cases and uphold principles of
              justice and accountability.
            </p>

            <p>
              <span className="benefitText-bold">
                Expert Guidance for Internal Complaints Committees (ICCs):
              </span>
               Prime Counsel Solutions provides dedicated support to Internal
              Complaints Committees (ICCs) entrusted with handling sexual
              harassment complaints.
            </p>

            <p>
              <span className="benefitText-bold">
                Industry-Specific Examples:
              </span>
               Tailor scenarios and examples to be relevant to the specific work
              environment your trainees face.
            </p>

            <p>
              <span className="benefitText-bold">
                Bystander Intervention Training:
              </span>
               Equip employees not only to recognize and report harassment but
              also to intervene effectively as bystanders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training1;
