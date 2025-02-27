import React from "react";
import { assets } from "../assets/assets";

const Disclaimer = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

  return (
    <div className="disclaimerContainer flex-center">
      <div className="disclaimerCard">
        <img src={assets.disclaimerBG} alt="" className="disclaimerBG" />
        <img
          src={assets.disclaimerHeading}
          alt=""
          className="disclaimerHeading"
        />
                <p>
          Prime Counsel Solutions, based in Tamil Nadu, India, is a legal
          process outsourcing (LPO) company. The content on this platform is for
          informational purposes only and does not constitute legal advice. It
          aims to enhance legal knowledge for the community and the public,
          based on a general understanding of the law. In compliance with Bar
          Council of Tamil Nadu rules, this platform strictly avoids advocate
          self-promotion. Any content shared by advocates is educational and
          non-commercial, without constituting legal advice. By using this
          platform, you acknowledge that no contractual relationship is formed
          with Prime Counsel Solutions or the advocates. Both the advocates and
          Prime Counsel Solutions disclaim any liability for actions taken based
          on the information provided here.
        </p>
        <img src={assets.disclaimerBtn} alt="" className="disclaimerBtn" onClick={onClose} />
      </div>
    </div>
  );
};

export default Disclaimer;
