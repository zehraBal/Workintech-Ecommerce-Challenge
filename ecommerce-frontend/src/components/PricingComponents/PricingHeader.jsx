export default function PricingHeader() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[30%]  gap-4 flex flex-col items-center justify-start font-bold text-center text-[#252B42] py-[50px]">
        <div className="text-base">PRICING </div>
        <div className="text-[58px] leading-[80px]">Simple Pricing</div>
        <div className="flex gap-4 ">
          <a
            className=" text-sm no-underline text-[#252B42] font-bold"
            href="/home"
          >
            Home
          </a>
          <i className="arrow-right"></i>
          <a
            className=" text-sm no-underline text-[#737373] font-bold"
            href="/Pricing"
          >
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
}
