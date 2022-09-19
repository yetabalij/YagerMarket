import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col">
      <div className="w-full">
        <h3 className="font-bold text-lg">Price</h3>
        <p
          className="hover:text-orange-400 cursor-pointer"
          onClick={() => {
            navigate("/search", { state: { start: 0, end: 25 } });
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
        <p
          className="hover:text-orange-400 cursor-pointer"
          onClick={() => {
            navigate("/search", { state: { start: 50, end: 100 } });
          }}
        >
          $50 to $100
        </p>
        <p
          className="hover:text-orange-400 cursor-pointer"
          onClick={() => {
            navigate("/search", { state: { start: 100, end: 200 } });
          }}
        >
          $100 to $200
        </p>
        <p
          className="hover:text-orange-400 cursor-pointer"
          onClick={() => {
            navigate("/search", { state: { start: 200, end: 5000 } });
          }}
        >
          $200 & above
        </p>
        <div className="flex gap-1">
          <input
            className="border border-orange-500 border-solid w-[50px]"
            placeholder="min"
            onChange={(e) => {
              setMin(e.target.value);
            }}
          />
          <input
            className="border border-orange-500 border-solid w-[50px]"
            placeholder="max"
            onChange={(e) => {
              setMax(e.target.value);
            }}
          />
          <button
            className="bg-orange-500 text-white px-1"
            onClick={() => {
              navigate("/search", { state: { start: min, end: max } });
            }}
          >
            Go
          </button>
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
