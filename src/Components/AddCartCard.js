import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  itemToLocalStorate,
} from "../redux/features/product/cartItemsSlice";

const AddCartCard = () => {
  const [amount, setAmount] = useState(1);
  const product = JSON.parse(localStorage.getItem("singleProduct"));
  const dispach = useDispatch();

  return (
    <div className="sm:mt-4 shadow-sm p-4">
      <h3 className="text-lg font-medium">{`Price: $${product.singleProduct.price}`}</h3>
      <span className="border-b-2 border-solid block border-gray-300 opacity-[0.6] w-[100%] my-2"></span>
      <div className="mt-2">
        <h4 className="text-lg font-medium mb-1">Select Quantity</h4>
        <select
          className="outline outline-offset-2 outline-1"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        >
          {Array(product.singleProduct.quantity)
            .fill()
            .map((_, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
        </select>
      </div>
      <span className="border-b-2 border-solid block border-gray-300 opacity-[0.6] w-[100%] my-2"></span>
      <div className="py-4">
        <button
          className="bg-orange-500 text-white px-12 py-2"
          onClick={() => {
            dispach(addItemToCart({ ...product.singleProduct, amount }));
            dispach(itemToLocalStorate());
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddCartCard;
