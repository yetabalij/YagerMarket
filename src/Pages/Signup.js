import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "./../Components/NavBar";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="flex flex-col">
        <div className="border border-solid border-orange-300 drop-shadow-sm w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] p-5 mx-auto">
          <p className="text-2xl font-medium mb-3">Sign up</p>
          <form className="flex flex-col">
            <label className="font-bold">First Name</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="text"
              placeholder="First Name"
            />
            <label className="font-bold">Last Name</label>
            <input
              className="border border-gray-400 rounded active:border-orange-400 focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="text"
              placeholder="Last Name"
            />
            <label className="font-bold">Email</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="text"
              placeholder="Email"
            />
            <label className="font-bold">Password</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="password"
              placeholder="Password"
            />
            <label className="font-bold">Confirm Password</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="password"
              placeholder="Confirm Password"
            />
            <div>
              <button className="mt-2 w-full bg-orange-500 text-white py-2 rounded-sm">
                Create Account
              </button>
            </div>
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
          </form>
        </div>
        <div className="w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] mt-4 mx-auto">
          <button
            className="border border-solid border-orange-400 text-gray-600 py-2 rounded-sm w-full font-medium"
            onClick={() => navigate("/signin")}
          >
            You have Account? Login
          </button>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
