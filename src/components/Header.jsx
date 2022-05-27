import { useState } from "react";
import Link from "next/link";
import Icon from "react-hero-icon";
import logo from "../assets/bcr_logo.png";
import Image from "next/image";
function Header() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);

    console.log(isActive);
  };

  return (
    <div className="">
      <header
        className={`${
          isActive ? "w-1/2 h-screen" : "w-full"
        }   block sm:flex justify-between sm:justify-around  right-0  duration-500  z-50 items-center bg-[#f1f3ff] pb-2 sm:py-5 `}
      >
        <div className="logo flex justify-between items-center">
          <div>
            {" "}
            <Image width={100} height={34} src={logo} alt="logo" />
          </div>

          <Icon
            className="flex sm:hidden"
            icon="menu"
            type="solid"
            onClick={handleToggle}
          />
        </div>
        <div
          className={`nav-items sm:flex text-sm font-helvetica
          ${
            isActive
              ? " flex flex-col items-end justify-center w-1/2 "
              : " hidden "
          }
        `}
        >
          <Link href="/AddCar" as="addcar">
            <div className=" nav-links mx-2 sm:text-base text-black hover:text-black ">
              Our Services
            </div>
          </Link>

          <Link href="/Payment" as="payment">
            <div className="nav-links mx-2 sm:text-base text-black hover:text-black">
              Why Us
            </div>
          </Link>
          <Link href="/testimonial">
            <div className="nav-links mx-2 sm:text-base text-black hover:text-black ">
              Testimonial
            </div>
          </Link>
          <Link href="/faq">
            <div className="nav-links mx-2 sm:text-base text-black hover:text-black ">
              FAQ
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
