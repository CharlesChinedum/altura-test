import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  const myName = "Ugbor Charles Chinedum";

  return (
    <div className="w-full">
      <hr className="border-gray-100 " />
      <div className="flex gap-5 md:gap-0 flex-col md:flex-row md:text-row items-center justify-between w-full px-12 py-2">
        <div className="">
          <a href="https://www.alturanft.com/" className="flex items-center">
            <img src={logo} alt="logo" className="" />
            <p className="text-white text-md md:text-lg font-bold">Altura</p>
          </a>
        </div>
        <div className="text-gray-400">
          <p className="text-center md:text-end">&copy; {year}</p>
          <p className="text-xs md:text-sm text-center">
            Made with ❤ by {myName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
