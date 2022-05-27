import { useState } from "react";
import Link from "next/link";
import Icon from "react-hero-icon";
import logo from "../assets/bcr_logo.png";
import Image from "next/image";
import profilePicture from "../assets/icon_twitter.svg";

function HeaderAdmin() {
  return (
    <header className="w-full flex justify-between  items-center sticky top-0 py-2 bg-[#f1f3ff] ">
      <div className="logo flex justify-between items-center">
        <div>
          {" "}
          <Image width={100} height={34} src={logo} alt="logo" />
        </div>

        <Icon className="flex sm:hidden" icon="menu" type="solid" />
      </div>
      <div
        className="nav-items  text-sm font-helvetica
                flex   justify-center w-1/2"
      >
        <input className="mx-5" type="text" placeholder="search" />
        <button className="mr-11 p-1 border-2 border-blue-600 text-blue-400">
          Search
        </button>
        <div className="profile-pic w-9 h-9 rounded-full">
          <Image src={profilePicture} />
        </div>
        <p className="text-xl">Unis Badri</p>
      </div>
    </header>
  );
}

export default HeaderAdmin;
