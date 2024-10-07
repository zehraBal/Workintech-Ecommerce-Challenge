import {
  faAws,
  faHooli,
  faLyft,
  faPiedPiperHat,
  faRedditAlien,
  faStripe,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  return (
    <section className="w-screen min-h-[365px] flex items-center justify-center bg-[#FAFAFA]">
      <div className="w-[1050px] h-full flex flex-col  items-center gap-9">
        <div className="w-[385px] text-xl  text-[#252B42]">
          Trusted By Over 4000 Big Companies
        </div>
        <div className="w-full flex justify-evenly items-center">
          <FontAwesomeIcon
            icon={faHooli}
            style={{ color: "#737373", width: "103px", height: "34px" }}
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
            style={{ color: "#737373", width: "103px", height: "42px" }}
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
      </div>
    </section>
  );
}
