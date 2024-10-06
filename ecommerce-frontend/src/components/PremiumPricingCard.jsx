import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function PremiumPricingCard({ isYearly }) {
  return (
    <div className="w-[327px] h-[664px] pricing-border flex flex-col items-center justify-evenly ml-1 sm:ml-0">
      <h3>PREMIUM</h3>
      <h5 className="text-[#737373]">
        Organize across all <br />
        apps by hand
      </h5>
      {/*price*/}
      <div className="w-[190px] h-14 gap-2 text-[#23A6F0] font-bold flex items-center justify-center">
        <div className="w-[104-px] h-[50px]  leading-[50px] text-4xl ">
          {isYearly ? "179.91" : "19.99"}
        </div>
        <div className="w-[76px]">
          <div className="w-4 h-8 text-2xl">$</div>
          <div className="w-full h-6 text-sm">
            {" "}
            {isYearly ? "Per Year" : "Per Month"}
          </div>
        </div>
      </div>
      {/*list*/}
      <div className="flex flex-col items-stretch w-[247px] h-[236px] gap-4 font-bold text-sm leading-6 text-[#252B42]">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#2DC071", height: "32px", width: "32px" }}
          />
          <h6>Unlimited product updates</h6>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#2DC071", height: "32px", width: "32px" }}
          />
          <h6>Unlimited product updates</h6>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#2DC071", height: "32px", width: "32px" }}
          />
          <h6>Unlimited product updates</h6>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#BDBDBD", height: "32px", width: "32px" }}
          />
          <h6>1GB Cloud storage</h6>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faCircleCheck}
            style={{ color: "#BDBDBD", height: "32px", width: "32px" }}
          />
          <h6>Email and community support</h6>
        </div>
      </div>
      <div>
        <button className="button-primary bg-[#23A6F0] text-white">
          Try for free
        </button>
      </div>
    </div>
  );
}
