import { useNavigate } from "react-router-dom";

export default function ContactCta() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pricing");
  };
  return (
    <div className="w-screen flex items-center justify-center flex-wrap">
      <div className="w-[1050px] flex items-center justify-center">
        <div className="w-[607px] font-bold text-[#252B42] flex flex-col items-center gap-9 pb-[100px]">
          <div>
            <img src="images/arrow.png" alt="" />
          </div>
          <div className=" text-base text-center">
            WE CAN'T WAIT TO MEET YOU
          </div>
          <div className="text-[58px] leading-[80px] text-center">
            Let’s Talk
          </div>
          <div>
            <button
              onClick={handleClick}
              className="button-primary bg-[#23A6F0] text-white text-sm"
            >
              Try it free now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
