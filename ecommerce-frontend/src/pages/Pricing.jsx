import { useState } from "react";
import PricingCardFree from "../components/PricingCardFree";
import PremiumPricingCard from "../components/PremiumPricingCard";
import StandartPricingCard from "../components/StandartPricingCard";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <div className="max-w-6xl flex flex-col items-center">
        {/* Title and Description */}
        <div className="w-[625px] flex flex-col items-center text-center justify-evenly">
          <h2 className="text-[40px] leading-[50px] font-bold text-[#252B42]">
            Pricing
          </h2>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center justify-evenly w-[310px] h-[44px] gap-4 font-bold text-[#252B42] text-lg">
          <div>Monthly</div>
          <label className="switch">
            <input type="checkbox" checked={isYearly} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <div>Yearly</div>
          {isYearly && (
            <button className="button-sm bg-[#B2E3FF] text-[#23A6F0]">
              Save 25%
            </button>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="flex items-end gap-1">
          <PricingCardFree isYearly={isYearly} />
          <StandartPricingCard isYearly={isYearly} />
          <PremiumPricingCard isYearly={isYearly} />
        </div>
      </div>
    </div>
  );
}
