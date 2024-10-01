import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <header className="w-screen flex flex-col  items-center justify">
      <div className="w-full bg-[#252B42] text-white flex  items-center justify-evenly sm:hidden">
        <div className=" flex items-center justify-between gap-3">
          <div className="flex items-center justify-between gap-1 leading-4">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff" }} />
            <h6 className="text-xs mb-1">(225) 555-0118</h6>
          </div>
          <div className="flex items-center justify-between gap-1">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
            <h6 className="text-xs mb-1">testuser@example.com</h6>
          </div>
        </div>

        <div className="p-3 gap-3 leading-6 font-bold ">
          <h6 className="tracking-wider">
            Follow us and get a chance to win %80 off
          </h6>
        </div>
        <div className="flex items-center gap-3 leading-6">
          <h6 className="mb-1">Follow Us : </h6>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
      <HeaderNav />
    </header>
  );
}
