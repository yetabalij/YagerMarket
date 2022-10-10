import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isStrongPassword from "validator/lib/isStrongPassword";

import Footer from "../Components/Footer";
import NavBar from "./../Components/NavBar";
import { signup } from "../redux/features/auth/authSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  const formValue = {
    fname,
    lname,
    email,
    password,
    confirmPassword,
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      isEmpty(fname) ||
      isEmpty(lname) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(confirmPassword)
    ) {
      return setValidationError("All fields are required.");
    }
    if (!isEmail(email)) {
      return setValidationError("Valid Email is required.");
    }
    if (!isStrongPassword(password)) {
      return setValidationError(
        "Password needs Uppercase,Lowercase,Number,Special character and minimum 8 characters."
      );
    }
    dispatch(signup({ formValue, navigate }));
  };
  return (
    <div>
      <NavBar />
      <div className="flex flex-col">
        <div className="border border-solid border-orange-300 drop-shadow-sm w-[90%] md:w-[45%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] p-5 mx-auto">
          <p className="text-2xl font-medium mb-3">Sign up</p>
          <form className="flex flex-col" onSubmit={onSubmitHandler}>
            {validationError && (
              <p className="mb-2 bg-red-500 py-1 text-white">
                {validationError}
              </p>
            )}
            <label className="font-bold">First Name</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="text"
              placeholder="First Name"
              value={fname}
              onChange={(e) => {
                setFname(e.target.value);
                setValidationError("");
              }}
            />
            <label className="font-bold">Last Name</label>
            <input
              className="border border-gray-400 rounded active:border-orange-400 focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="text"
              placeholder="Last Name"
              value={lname}
              onChange={(e) => {
                setLname(e.target.value);
                setValidationError("");
              }}
            />
            <label className="font-bold">Email</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidationError("");
              }}
            />
            <label className="font-bold">Password</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setValidationError("");
              }}
            />
            <label className="font-bold">Confirm Password</label>
            <input
              className="border border-gray-400 rounded focus:outline-none focus:border-orange-400 p-2 mb-1 text-gray-600"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setValidationError("");
              }}
            />
            <div>
              <button
                className="mt-2 w-full bg-orange-500 text-white py-2 rounded-sm"
                type="submit"
              >
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
