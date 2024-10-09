import BreadCrumbs from "../BreadCrumbs";

export default function PricingHeader() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[30%]  gap-4 flex flex-col items-center justify-start font-bold text-center text-[#252B42] py-[50px]">
        <div className="text-base">PRICING </div>
        <div className="text-[58px] leading-[80px]">Simple Pricing</div>
        <BreadCrumbs name={"Pricing"} address={"/pricing"} />
      </div>
    </div>
  );
}
