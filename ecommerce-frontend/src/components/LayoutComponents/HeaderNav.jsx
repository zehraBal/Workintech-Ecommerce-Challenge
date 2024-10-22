import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import ShopDropdown from "./ShopDropdown";
import md5 from "blueimp-md5";
import ProfileDropdown from "./ProfileDropDown";

export default function HeaderNav() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.client.isLoggedIn);
  const user = useSelector((state) => state.client.user);
  const [isHidden, setIsHidden] = useState(true);
  const [gravatarUrl, setGravatarUrl] = useState("");
  console.log(user);
  useEffect(() => {
    if (isLoggedIn) {
      const emailHash = md5(user.email.trim().toLowerCase());
      const gravatarLink = "https://www.gravatar.com/avatar/${emailHash}?s=200";
      setGravatarUrl(gravatarLink);
    }
  }, [dispatch]);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  console.log("Is logged in:", isLoggedIn);
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
          className={`items-center justify-between flex sm:flex-col gap-[30px] ${
            isHidden ? "sm:hidden" : ""
          } `}
        >
          <a className="a-gray font-bold  leading-6" href="/">
            Home
          </a>
          <div className="flex items-center justify-center">
            <a
              className="a-gray font-bold  leading-6 flex items-center gap-1"
              href="/shop"
            >
              Shop
            </a>
            <ShopDropdown />
          </div>

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

        {/* Kullanıcı giriş yaptıysa kullanıcı bilgilerini ve Gravatar resmini göster */}
        <nav className="flex gap-[5px] items-center sm:flex-col sm:hidden">
          <a href="" className="p-[15px]">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              style={{ color: "#23A6F0" }}
            />
          </a>
          <a href="/cart" className="p-[15px]">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="lg"
              style={{ color: "#23A6F0" }}
            />
          </a>
          <a href="/favorites" className="p-[15px]">
            <FontAwesomeIcon
              size="lg"
              icon={faHeart}
              style={{ color: "#23A6F0" }}
            />
          </a>
          {isLoggedIn ? (
            <div className="flex items-center gap-3 justify-between sm:flex-col sm:gap-6">
              <img src={gravatarUrl} alt="User Gravatar" className=" w-9 h-9" />
              <span className="text-prim text-sm font-bold">
                Welcome,
                <br /> {user.name}!
              </span>
              <a
                href="/profile"
                className="text-blue font-bold flex items-center  gap-1"
              >
                <FontAwesomeIcon
                  size="lg"
                  icon={faUser}
                  style={{ color: "#23A6F0" }}
                />
                <ProfileDropdown />
              </a>
            </div>
          ) : (
            <div className="flex items-center gap-[5px] justify-between sm:flex-col sm:gap-6">
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
          )}
        </nav>
      </div>
    </div>
  );
}
