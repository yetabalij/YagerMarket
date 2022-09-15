import React from "react";
import Logo from "./../assets/logo/yagermarket2.png";

const Footer = () => {
  return (
    <div className="mt-10 bg-[#232f3e]">
      <div className="w-[80%] mx-auto flex flex-row justify-between text-white py-12">
        <div className="w-16 h-16">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div>div 1</div>
        <div>div 1</div>
        <div>div 1</div>
      </div>
    </div>
  );
};

export default Footer;
