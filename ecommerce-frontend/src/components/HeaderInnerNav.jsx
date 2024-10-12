import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderInnerNav() {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();
  /*  useEffect(() => {
    console.log(isHidden);
  }, [isHidden]);*/
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <div className="basis-[85%] flex flex-wrap justify-center items-center sm:flex-col">
      <div className=" basis-full flex items-center justify-between py-4 sm:flex-col sm:w-full sm:basis-full sm:gap-6">
        <div className="sm:flex sm:justify-between sm:items-start sm:w-[60%]">
          <div className="text-[#252B42] text-start font-bold text-2xl">
            BrandName
          </div>
          <div className="lg:hidden cursor-pointer" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} style={{ color: "#737373" }} />
          </div>
        </div>
        <div
          className={`w-[70%] items-center justify-between flex sm:flex-col sm:gap-[30px] ${
            isHidden ? "sm:hidden" : ""
          } `}
        >
          <nav className="flex justify-between items-center gap-[21px] sm:flex-col sm:gap-[30px]">
            <a className="a-gray font-bold  leading-6" href="/">
              Home
            </a>
            <a className="a-gray font-bold  leading-6" href="/product">
              Product
            </a>
            <a className="a-gray font-bold  leading-6" href="/pricing">
              Pricing
            </a>
            <a className="a-gray font-bold  leading-6" href="/contact">
              Contact
            </a>
            <a className="a-gray font-bold  leading-6" href="/team">
              Team
            </a>
            <a className="a-gray font-bold  leading-6" href="/team">
              Blog
            </a>
          </nav>
          <nav className="flex items-center gap-[45px] justify-between sm:flex-col sm:gap-6">
            <a
              className="text-[#23A6F0] no-underline font-bold  leading-6 "
              href="/login"
            >
              Login
            </a>
            <div>
              <button
                onClick={handleRegister}
                className=" button-primary bg-[#23A6F0] text-white "
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
