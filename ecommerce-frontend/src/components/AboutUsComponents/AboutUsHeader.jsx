import HeaderNav from "../HeaderNav";

export default function AboutUsHeader() {
  return (
    <header className="w-screen h-screen relative  ">
      <HeaderNav />
      <div className="contact-bg">
        <div className="contact-img">
          <div className="circle"></div>
          <div className="small-circle"></div>
          <div className="smaller-circle"></div>
          <div className="purple-circle"></div>
          <div className="purple-circle-bottom"></div>
        </div>
        <div className="aboutbg-img">
          <img className="abtImg" src="/images/about.png" alt="" />
        </div>
      </div>
      <div className="w-[1050px]] py-[112px] gap-[80px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full gap-8 flex items-center ">
          <div className="w-[600px] flex flex-col items-strecth gap-9">
            <div className="font-bold text-base text-[#252B42]">
              ABOUT COMPANY
            </div>
            <div className="font-bold text-[58px] leading-[80px] text-[#252B42]">
              ABOUT US
            </div>
            <div className="font-bold text-xl text-[#737373]">
              We know how large objects will act, <br />
              but things on a small scale
            </div>
            <div>
              <button className="button-primary bg-[#23A6F0] text-white">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="w-[415px]"></div>
        </div>
      </div>
    </header>
  );
}
