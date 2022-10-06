import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./../assets/logo/yagermarket3.png";
import { RiShoppingCartFill } from "react-icons/ri";

const NavBar = () => {
  const localStorageItems = JSON.parse(localStorage.getItem("cartItems"));
  const stateItems = useSelector((state) => state.CartItems.Items);

  return (
    <div className="bg-gray-100 shadow-md mb-5">
      <div className="flex justify-between py-2 w-[94%] mx-auto items-center">
        <div className="w-16 h-16">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="text-xl font-medium text-orange-600">
            <Link to="/signin">Sign In</Link>
          </div>
          <div className="text-orange-600">
            <Link to="/cart" className="flex relative">
              <RiShoppingCartFill className="text-3xl" />
              <div className="absolute right-[-60%] top-[-20%] w-[18px] h-[18px]">
                <p className="text-lg font-bold absolute top-[-15%]">
                  {stateItems?.length}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
