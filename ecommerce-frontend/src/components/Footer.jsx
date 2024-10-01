import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <footer className="w-screen flex flex-col px-[190px] lg:px-[30px] sm:px-0">
      <div className="w-full flex justify-between items-center py-[40px] sm:flex-col sm:justify-center">
        <div className="w-3/4 text-start leading-8 font-bold sm:w-full sm:h-[58px] sm:gap-3">
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
      <div className="w-full border-b border-solid border-black sm:hidden"></div>
      <div className="w-full flex justify-between py-[50px] sm:flex-col sm:gap-[30px]">
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Company Info</h5>
          <ul className="space-y-5 text-[#737373]">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Legal</h5>
          <ul className="space-y-5 text-[#737373]">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Features</h5>
          <ul className="space-y-5 text-[#737373]">
            <li>Bussiness Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
          <h5>Resources</h5>
          <ul className="space-y-5 text-[#737373] ">
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
      <div className="w-full text-start leading-6 font-bold py-[25px] text-[#737373]">
        <h6>Made With Love By Figmaland All Right Reserved</h6>
      </div>
    </footer>
  );
}
