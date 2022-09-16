import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col">
      <div className="w-full">
        <h3 className="font-bold text-lg">Price</h3>
        <p
          className="hover:text-orange-400 cursor-pointer"
          onClick={() => {
            navigate("/search", { state: { start: 25 } });
          }}
        >
          Under $25
        </p>
        <p
          className="hover:text-orange-400 cursor-pointer"
          onClick={() => {
            navigate("/search", { state: { start: 25, end: 50 } });
          }}
        >
          $25 to $50
        </p>
        <p className="hover:text-orange-400 cursor-pointer">$50 to $100</p>
        <p className="hover:text-orange-400 cursor-pointer">$100 to $200</p>
        <p className="hover:text-orange-400 cursor-pointer">$200 & above</p>
        <div className="flex gap-1">
          <input className="border border-orange-500 border-solid w-[50px]" />
          <input className="border border-orange-500 border-solid w-[50px]" />
          <button className="bg-orange-500 text-white px-1">Go</button>
        </div>
      </div>
      <div className="w-full mt-5">
        <h3 className="font-bold text-lg">Catagory</h3>
        <p>Women</p>
        <p>Men</p>
        <p>kids</p>
      </div>
    </div>
  );
};

export default Search;
