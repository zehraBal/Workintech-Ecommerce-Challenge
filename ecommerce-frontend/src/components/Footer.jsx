import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <footer className="w-screen flex flex-col mt-40px">
      <div className="w-full flex justify-center items-center bg-[#FAFAFA] px-[100px] py-[40px] sm:flex-col sm:justify-start sm:items-start sm:[414px] sm:p-0 sm:pl-12">
        <div className="w-[1440px] flex justify-between items-center sm:w-[414px] sm:flex-col">
          <div className="w-3/4 text-start leading-8 font-bold sm:w-full sm:h-[58px] sm:gap-3 sm:items-start">
            <h3>BrandName</h3>
          </div>
          <div className="w-1/4 flex gap-5  justify-center sm:w-full   sm:justify-start">
            <div>
              <FontAwesomeIcon
                icon={faFacebook}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faTwitter}
                size="xl"
                style={{ color: "#74C0FC" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-solid border-[#E6E6E6]  sm:hidden"></div>
      <div className="w-full flex justify-between py-[50px] px-[100px] sm:flex-col sm:gap-[30px] sm:w-[414px] sm:pl-12">
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Company Info</h5>
          <ul className="space-y-5 text-[#737373] p-0">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Legal</h5>
          <ul className="space-y-5 text-[#737373] p-0">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Features</h5>
          <ul className="space-y-5 text-[#737373] p-0">
            <li>Bussiness Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Resources</h5>
          <ul className="space-y-5 text-[#737373] p-0">
            <li>IOS & Android</li>
            <li>Carrier</li>
            <li>Watch a Demo</li>
            <li>API</li>
          </ul>
        </div>
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5 className="font-bold">Get In Touch</h5>
          <FooterForm />
        </div>
      </div>
      <div className="w-full text-start leading-6 font-bold py-[25px] text-[#737373] sm:w-[414px] sm:pl-12">
        <h6>Made With Love By Figmaland All Right Reserved</h6>
      </div>
    </footer>
  );
}
