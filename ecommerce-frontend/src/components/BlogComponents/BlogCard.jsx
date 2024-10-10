import { faChartArea, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BlogCard({ path }) {
  return (
    <div className="flex flex-col justify-center items-center w-[470px] sm:w-[330px]">
      <div className="w-full h-[300px] relative">
        <div className="bg-[#E74040] text-white font-bold px-[10px]  rounded-[3px] absolute top-5 left-5">
          NEW
        </div>
        <img className="w-full h-full object-cover" src={path} alt="" />
      </div>
      <div className="w-full flex flex-col justify-around items-start pt-[25px] pr-[25px] pb-[35px] pl-[25px] gap-[10px]">
        <div className="flex gap-[15px]">
          <h6 className="text-xs text-[#8EC2F2]">Google</h6>
          <h6 className="text-xs text-[#737373]">Trending</h6>
          <h6 className="text-xs text-[#737373]">New</h6>
        </div>
        <h4 className="text-[20px] leading-[30px] text-[#252B42] text-start">
          Koudetat à la Maison <div id="1br"></div>
          {"(L'intégrale)"}
        </h4>
        <div className="w-[280px]">
          <p className="text-sm text-[#737373]">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
        </div>
        <div className="w-full py-[15px] flex justify-between items-center">
          <div className="flex items-center justify-between gap-[5px]">
            <div className="flex items-end justify-center">
              <FontAwesomeIcon
                icon={faClock}
                size="sm"
                style={{ color: "#23A6F0" }}
              />
            </div>
            <h6 className="text-xs text-[#737373] m-0">22 April 2021</h6>
          </div>
          <div className="flex items-center justify-between gap-[5px]">
            <FontAwesomeIcon icon={faChartArea} style={{ color: "#23856D" }} />
            <h6 className="text-xs text-[#737373] m-0">10 Comments</h6>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <a className="a-gray font-bold text-14" href="">
            Learn More
          </a>
          <div className="arrow-right-blue"></div>
        </div>
      </div>
    </div>
  );
}
