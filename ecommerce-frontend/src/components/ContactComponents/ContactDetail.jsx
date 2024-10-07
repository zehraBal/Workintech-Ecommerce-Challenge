import ContactDetailLoc from "./ContactDetailLoc";
import ContactDetailMail from "./ContactDetailMail";
import ContactDetailPhone from "./ContactDetailPhone";

export default function ContactDetail() {
  return (
    <div className="w-screen h-screen flex  items-stretch justify-center ">
      <div className="w-[1150px] h-full text-[#252B42] font-bold flex flex-col justify-center items-center py-[112px] gap-[80px] ">
        <div className="w-[625px] flex flex-col items-center ">
          <div className="w-[132px] text-[14px] leading-[24px] text-center">
            VISIT OUR OFFICE
          </div>
          <div className="w-[531px] text-[40px] leading-[50px] text-center">
            We help small businesses with big ideas
          </div>
        </div>
        <div className=" flex  items-center w-auto justify-center ">
          <ContactDetailPhone />
          <ContactDetailLoc />
          <ContactDetailMail />
        </div>
      </div>
    </div>
  );
}
