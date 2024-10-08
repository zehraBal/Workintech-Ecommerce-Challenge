import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VideoCard() {
  return (
    <section className="flex flex-wrap items-center justify-center py-[100px] sm:py-[50px]">
      <div className="basis-[65%] relative ">
        <div className="absolute  w-full h-full bg-gradient-to-t from-black to-transparent opacity-80 rounded-[20px]"></div>
        <img
          className="w-full h-full object-cover rounded-[20px] border border-solid border-transparent"
          src="images/video.png"
          alt="Video preview"
        />
      </div>
      <div className="absolute w-24 h-24 bg-[#23A6F0] rounded-[74%] py-[35px] px-[37px]] flex items-center justify-center hover:bg-[#1D91D0] cursor-pointer sm:w-20 sm:h-20 ">
        <FontAwesomeIcon
          icon={faPlay}
          style={{ color: "#ffffff", width: "19px", height: "22px" }}
        />
      </div>
    </section>
  );
}
