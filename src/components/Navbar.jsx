import React, { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets/index";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const renderMenuItems = () => {
    return (
      <ul className="hidden md:flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    );
  };

  const renderMobileMenuItems = () => {
    return (
      <ul className="flex flex-col text-center">
        <li className="p-4 hover:bg-gray-100">Home</li>
        <li className="p-4 hover:bg-gray-100">About</li>
        <li className="p-4 hover:bg-gray-100">Course</li>
        <li className="p-4 hover:bg-gray-100">Blog</li>
        <li className="p-4 hover:bg-gray-100">Contact</li>
      </ul>
    );
  };

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="max-w-[510px] md:max-w-[1390px] w-full h-full flex justify-between items-center px-6 ">
        <img src={logo} alt="Logo" className="h-[25px]" />

        <div className="flex">{renderMenuItems()}</div>

        <div className="hidden md:flex">
          <button className="flex px-6 items-center justify-between gap-2 bg-transparent">
            <img src={lock} alt="Lock Icon" />
            Login
          </button>
          <button className="bg-[#20B486] px-8 py-3.5 rounded-md text-white font-bold">
            Sign Up for Free
          </button>
        </div>

        <div className="md:hidden " onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} alt="Toggle Icon" />
        </div>
      </div>

      {toggle && (
        <div className="absolute z-10 p-4 bg-white w-full px-8 md:hidden">
          {renderMobileMenuItems()}
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[#20B486] flex px-6 items-center w-full justify-center gap-2 py-3.5 bg-transparent">
              <img src={lock} alt="Lock Icon" />
              Login
            </button>
            <button className="bg-[#20B486] px-8 py-3.5 rounded-md text-white font-bold">
              Sign Up for Free
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
