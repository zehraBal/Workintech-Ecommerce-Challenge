import { useState } from "react";
import PricingCardFree from "./PricingCardFree";
import PremiumPricingCard from "./PremiumPricingCard";
import StandartPricingCard from "./StandartPricingCard";
export default function PricingDetails() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="flex justify-center items-center bg-[#FAFAFA]">
      <div className="basis-[70%] flex flex-col items-center gap-12 py-[112px]">
        <article className="w-3/5 flex flex-col items-center text-center justify-evenly flex-wrap">
          <h2 className="text-[40px] leading-[50px] font-bold text-[#252B42]">
            Pricing
          </h2>
          <p className="text-[#737373] ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </article>

        <div className="flex  items-center justify-evenly min-w-[310px] h-[44px] gap-4 font-bold text-[#252B42] text-lg ">
          <div>Monthly</div>
          <label className="switch">
            <input type="checkbox" checked={isYearly} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <div>Yearly</div>
          {isYearly && (
            <button className="button-sm bg-[#B2E3FF] text-[#23A6F0] text-sm ">
              Save 25%
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-end sm:flex-col sm:items-center sm:justify-between sm:gap-8">
          <PricingCardFree isYearly={isYearly} />
          <StandartPricingCard isYearly={isYearly} />
          <PremiumPricingCard isYearly={isYearly} />
        </div>
      </div>
    </div>
  );
}
