import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderNav from "../HeaderNav";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function ContactHeadOld() {
  return (
    <header className="w-screen h-[800px] relative flex flex-wrap">
      <HeaderNav />
      <div className="contact-bg ">
        <div className="contact-img">
          <div className="circle-div">
            <div className="circle"></div>
          </div>
          <div className="small-circle"></div>
          <div className="smaller-circle"></div>
          <div className="purple-circle"></div>
          <div className="purple-circle-bottom"></div>
        </div>
        <div className="contactbg-img">
          <img className="bgImg" src="/images/contact.png" alt="" />
        </div>
      </div>
      <div className="content-section flex items-center ml-[200px]">
        <div className="w-[599px] h-[518px] gap-[35px] flex flex-col items-stretch justify-start">
          <div className="text-left text-[#252B42] font-bold text-base">
            CONTACT US
          </div>
          <div className="w-[378px] text-start text-[#252B42] font-bold text-[58px] leading-[80px]">
            Get in touch today !
          </div>
          <div className="w-[376px] text-[#737373] text-[20px] leading-[30px] text-left">
            We know how large objects will act, but things on a small scale
          </div>
          <div className="w-[242px] text-left text-[#252B42] font-bold text-2xl">
            Phone : +451 215 215 <br />
            Fax : +451 215 215
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ color: "#252B42", width: "30px", height: "30px" }}
            />{" "}
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#252B42", width: "30px", height: "30px" }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#252B42", width: "30px", height: "30px" }}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#252B42", width: "30px", height: "30px" }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
