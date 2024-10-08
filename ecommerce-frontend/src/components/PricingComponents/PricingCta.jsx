import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function PricingCta() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pricing");
  };
  return (
    <section className="flex flex-wrap items-center justify-center">
      <div className="basis-[70%] flex items-center justify-center py-[160px] gap-[96px]">
        <div className="w-3/5 flex  flex-col items-center justify-between gap-9">
          <div className="font-bold text-[40px] leading-[50px] text-center text-[#252B42]">
            Start your 14 days free trial
          </div>
          <div className="text-sm text-[#737373] text-center">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do
            met sent. RELIT official consequent.
          </div>
          <div>
            <button
              onClick={handleClick}
              className="button-primary bg-[#23A6F0] text-white text-sm"
            >
              Try it free now
            </button>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#55ACEE", width: "30px", height: "30px" }}
              />{" "}
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "#395185", width: "30px", height: "30px" }}
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ width: "30px", height: "30px" }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0A66C2", width: "30px", height: "30px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
