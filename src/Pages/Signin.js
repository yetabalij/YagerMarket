import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Signin = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-col">
        <div className="border border-solid border-gray-300 drop-shadow-sm w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] p-5 mx-auto">
          <p className="text-2xl font-medium mb-3">Sign in</p>
          <div className="flex flex-col">
            <label className="font-bold">Email</label>
            <input
              className="border border-gray-400 rounded focus:outline-none p-2 mb-1 text-gray-600"
              type="text"
              placeholder="Email"
            />
            <label className="font-bold">Password</label>
            <input
              className="border border-gray-400 rounded focus:outline-none p-2 mb-1 text-gray-600"
              type="text"
              placeholder="Password"
            />
            <p className="text-sm mt-2">
              By continuing, you agree to YegarMarket's{" "}
              <Link to="" className="text-blue-500">
                Conditions of Use
              </Link>{" "}
              and{" "}
              <Link to="" className="text-blue-500">
                {" "}
                Privacy Notice
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] mt-4 mx-auto">
          <button className="bg-orange-400 text-white py-2 rounded-sm w-full font-medium">
            Create your YegarMarket Account
          </button>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Signin;
