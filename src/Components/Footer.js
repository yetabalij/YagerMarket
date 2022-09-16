import React from "react";
import Logo from "./../assets/logo/yagermarket2.png";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-10 bg-[#232f3e] relative pb-20">
      <div className="w-[80%] mx-auto sm:flex flex-row justify-between text-white py-12">
        <div className="w-16 h-16">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="text-xl font-medium text-orange-500">Catagories</p>
          </div>
          <div>
            <p>Men</p>
          </div>
          <div>
            <p>Women</p>
          </div>
          <div>
            <p>Kids</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <p className="text-xl font-medium text-orange-500">Help</p>
          </div>
          <div>
            <p>Terms and Conditions</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="sm:flex flex-col items-center">
          <div className="mb-2">
            <p className="text-xl font-medium text-orange-500">Social Medias</p>
          </div>
          <div className="flex gap-2 text-[1.3rem]">
            <BsFacebook />
            <RiInstagramFill />
            <AiFillYoutube />
            <BsTwitter />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <p className="text-white pt-10">
          &copy; {`${date.getFullYear()}, Yegara Market.`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
