import ContactDetailLoc from "./ContactDetailLoc";
import ContactDetailMail from "./ContactDetailMail";
import ContactDetailPhone from "./ContactDetailPhone";

export default function ContactDetail() {
  return (
    <section className="flex items-center justify-center flex-wrap">
      <div className="basis-[85%] h-full text-[#252B42] font-bold flex flex-col justify-center items-center py-[112px] gap-[80px] sm:py-[45px] sm:basis-full">
        <div className="w-[75%] flex flex-col items-center flex-wrap ">
          <div className="text-[14px] leading-[24px] text-center">
            VISIT OUR OFFICE
          </div>
          <div className="w-full text-[40px] leading-[50px] text-center">
            We help small businesses <br className="sm:hidden" />
            with big ideas
          </div>
        </div>
        <div className=" flex  items-center w-auto justify-center flex-wrap">
          <ContactDetailPhone />
          <ContactDetailLoc />
          <ContactDetailMail />
        </div>
      </div>
    </section>
  );
}
