import {
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShopDropdown from "./ShopDropdown";

export default function HeaderNav() {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();
  /*  useEffect(() => {
    console.log(isHidden);
  }, [isHidden]);*/
  const handleClick = () => {
    setIsHidden(!isHidden);
  };
  const handleRegister = () => {
    navigate("/signup");
  };
  return (
    <div className="basis-[85%] flex flex-wrap justify-center items-center sm:flex-col">
      <div className=" basis-full flex items-center justify-between py-4 sm:flex-col sm:w-full sm:basis-full sm:gap-6">
        <div className="sm:flex sm:justify-between sm:w-full sm:items-center ">
          <div className="text-prim text-start font-bold text-2xl">
            BrandName
          </div>
          <div className="flex gap-6 items-center lg:hidden cursor-pointer">
            <FontAwesomeIcon icon={faUser} style={{ color: "#3C403D" }} />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#3C403D" }}
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#3C403D" }}
            />
            <FontAwesomeIcon icon={faHeart} style={{ color: "#3C403D" }} />
            <div onClick={handleClick}>
              <FontAwesomeIcon icon={faBars} style={{ color: "#3C403D" }} />
            </div>
          </div>
        </div>

        <nav
          className={` items-center justify-between flex sm:flex-col gap-[30px] ${
            isHidden ? "sm:hidden" : ""
          } `}
        >
          <a className="a-gray font-bold  leading-6" href="/">
            Home
          </a>
          <a
            className="a-gray font-bold  leading-6 flex items-center gap-1"
            href="/shop"
          >
            Shop
            <ShopDropdown />
          </a>

          <a className="a-gray font-bold  leading-6" href="/about">
            About
          </a>
          <a className="a-gray font-bold  leading-6" href="/blog">
            Blog
          </a>
          <a className="a-gray font-bold  leading-6" href="/contact">
            Contact
          </a>
          <a className="a-gray font-bold  leading-6" href="/pages">
            Pages
          </a>
        </nav>
        <nav className="flex gap-[5px] items-center sm:flex-col sm:hidden">
          <div className="flex items-center gap-[5px] justify-between sm:flex-col sm:gap-6 ">
            <FontAwesomeIcon icon={faUser} style={{ color: "#23A6F0" }} />
            <a
              className="text-blue no-underline font-bold  leading-6 hover:text-[16px]"
              href="/login"
            >
              Login /
            </a>
            <a
              className="text-blue no-underline font-bold  leading-6 hover:text-[16px]"
              href="/signup"
            >
              Register
            </a>
          </div>
          <a href="" className="p-[15px]">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#23A6F0" }}
            />
          </a>
          <a href="/cart" className="p-[15px]">
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#23A6F0" }}
            />
          </a>
          <a href="/favorites" className="p-[15px]">
            <FontAwesomeIcon icon={faHeart} style={{ color: "#23A6F0" }} />
          </a>
        </nav>
      </div>
    </div>
  );
}
