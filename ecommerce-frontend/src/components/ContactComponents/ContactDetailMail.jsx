import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactDetailMail() {
  return (
    <div className="w-[329px] h-[343px] flex flex-col gap-[15px] justify-center items-center">
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{ color: "#23A6F0", width: "72px", height: "72px" }}
      />
      <div className="w-[216px] font-bold text-[#252B42] text-[14px] leading-[24px] text-center">
        georgia.young@example.com <br />
        georgia.young@ple.com
      </div>
      <div className="text-base">Get Support</div>
      <div>
        <button className="button-primary-round">Submit Request</button>
      </div>
    </div>
  );
}
