import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <footer className=" flex flex-col  items-center justify-center">
      <div className="w-full flex justify-center items-center flex-wrap sm:flex-col ">
        <div className="w-[85%] flex justify-center items-center py-[40px] flex-wrap sm:flex-col">
          <div className="w-full flex items-center justify-between sm:flex-col">
            <div className=" text-start leading-8 font-bold sm:w-full sm:h-[58px] sm:gap-3 sm:items-start">
              <h3>BrandName</h3>
            </div>
            <div className=" flex gap-5  justify-center sm:w-full   sm:justify-start">
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
      </div>

      <div className="w-[85%] border-b border-solid border-[#E6E6E6]  sm:hidden"></div>
      <div className="w-full flex justify-center items-center flex-wrap">
        <div className="w-[85%] flex justify-between py-[50px]  flex-wrap sm:flex-col sm:gap-[30px] ">
          <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
            <h5 className=" font-bold text-[#252B42]">Company Info</h5>
            <ul className="space-y-5 p-0">
              <li>
                <a className="a-gray" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  Carrier
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  We are hiring
                </a>
              </li>
              <li>
                <a className="a-gray" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
            <h5 className=" font-bold text-[#252B42]">Legal</h5>
            <ul className="space-y-5 p-0">
              <li>
                <a className="a-gray" href="/about">
                  About Us
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  Carrier
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  We are hiring
                </a>
              </li>
              <li>
                <a className="a-gray" href="/blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
            <h5 className=" font-bold text-[#252B42]">Features</h5>
            <ul className="space-y-5 p-0">
              <li>
                <a className="a-gray" href="/">
                  Bussiness Marketting
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  User Analytic
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  Live Chat
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col text-start leading-6 space-y-5 font-bold">
            <h5 className=" font-bold text-[#252B42]">Resources</h5>
            <ul className="space-y-5 p-0">
              <li>
                <a className="a-gray" href="/">
                  IOS & Android
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  Carrier
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  Watch a Demo{" "}
                </a>
              </li>
              <li>
                <a className="a-gray" href="/">
                  API{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap flex-col text-start leading-6 space-y-5 font-bold">
            <h5 className=" font-bold text-[#252B42]">Get In Touch</h5>
            <FooterForm />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center leading-6 font-bold py-[25px] bg-[#FAFAFA] text-[#737373] ">
        <div className="w-[85%]">
          <h6>Made With Love By Figmaland All Right Reserved</h6>
        </div>
      </div>
    </footer>
  );
}
