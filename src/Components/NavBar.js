import React from "react";

const NavBar = () => {
  return (
    <div className="bg-gray-100 shadow-md mb-5">
      <div className="flex justify-between py-2 w-[94%] mx-auto items-center">
        <div className="text-xl text-orange-700 font-bold bg-orange-200 p-3 rounded-full shadow-md">
          <a href="/">YM</a>
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
