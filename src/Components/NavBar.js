import React from "react";
import Logo from "./../assets/logo/yagermarket3.png";

const NavBar = () => {
  return (
    <div className="bg-gray-100 shadow-md mb-5">
      <div className="flex justify-between py-2 w-[94%] mx-auto items-center">
        <div className="w-16 h-16">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="flex gap-4">
          <div>
            <a href="/signin">SignIn</a>
          </div>
          <div>cart</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
