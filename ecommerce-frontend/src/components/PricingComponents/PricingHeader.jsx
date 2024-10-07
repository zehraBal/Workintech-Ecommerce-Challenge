export default function PricingHeader() {
  return (
    <div className="w-screen flex item justify-center">
      <div className="w-[427px] h-[200px] gap-4 flex flex-col items-center justify-start font-bold text-center text-[#252B42]">
        <div className="text-base">PRICING </div>
        <div className="text-[58px] leading-[80px]">Simple Pricing</div>
        <div className="flex gap-4 ">
          <a
            className=" text-sm no-underline text-[#252B42] font-bold"
            href="/home"
          >
            Home
          </a>
          <i class="arrow-right"></i>
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
