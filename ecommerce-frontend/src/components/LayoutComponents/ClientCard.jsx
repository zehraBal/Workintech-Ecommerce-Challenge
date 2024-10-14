import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ClientCard() {
  return (
    <div className="w-full flex-wrap flex justify-evenly items-center sm:flex-col gap-[30px] py-[50px]">
      <FontAwesomeIcon
        icon={faHooli}
        style={{ color: "#737373", width: "153px", height: "59px" }}
      />
      <FontAwesomeIcon
        icon={faLyft}
        style={{ color: "#737373", width: "83px", height: "59px" }}
      />
      <FontAwesomeIcon
        icon={faPiedPiperHat}
        style={{ color: "#737373", width: "102px", height: "75px" }}
      />
      <FontAwesomeIcon
        icon={faStripe}
        style={{ color: "#737373", width: "153px", height: "59px" }}
      />
      <FontAwesomeIcon
        icon={faAws}
        style={{ color: "#737373", width: "103px", height: "62px" }}
      />
      <FontAwesomeIcon
        icon={faRedditAlien}
        style={{ color: "#737373", width: "76px", height: "72px" }}
      />
    </div>
  );
}
