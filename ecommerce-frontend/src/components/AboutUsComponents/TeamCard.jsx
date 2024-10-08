import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TeamCard({ profilePicture }) {
  return (
    <div className="w-[316px] h-[383px] flex flex-col justify-between items-center">
      <div className="w-full h-[231px]">
        <img
          className="w-full h-full object-cover"
          src={profilePicture}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center gap-[10px] p-[30px]">
        <h5 className="text-[#252B42] font-bold text-base">Username </h5>
        <h6 className="text-[#737373] leading-6 font-bold">Profession</h6>
        <div className="flex gap-5 items-center">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: "#23A6F0", width: "24px", height: "20px" }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#23A6F0", width: "24px", height: "20px" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#23A6F0", width: "24px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}
