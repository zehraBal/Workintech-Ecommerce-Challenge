import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-screen flex flex-col  bg-slate-600">
      <div className="w-full ">
        <div className="w-[500px]">
          <h3>BrandName</h3>
        </div>
        <div className="w-[500px]">
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
      <div className="w-full">
        <div>
          <h5>Company Info</h5>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h5>Features</h5>
          <ul>
            <li>Bussiness Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>
        <div>
          <h5>Resources</h5>
          <ul>
            <li>IOS & Android</li>
            <li>Carrier</li>
            <li>Watch a Demo</li>
            <li>API</li>
          </ul>
        </div>
        <div>
          <h5>Get In Touch</h5>
        </div>
      </div>
      <div className="w-full">
        <h6>Made With Love By Figmaland All Right Reserved</h6>
      </div>
    </footer>
  );
}