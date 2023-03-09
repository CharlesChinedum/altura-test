import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex w-full px-4 md:px-12 py-2">
        <div className="">
          <a href="https://www.alturanft.com/" className="flex items-center">
            <img src={logo} alt="logo" className="" />
            <p className="text-white text-md md:text-lg font-bold">Altura</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
