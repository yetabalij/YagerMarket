import React from "react";

const AddCartCard = () => {
  const product = JSON.parse(localStorage.getItem("singleProduct"));
  return (
    <div className="sm:mt-4 shadow-sm p-4">
      <h3 className="text-lg font-medium">{`Price: $${product.singleProduct.price}`}</h3>
      <span className="border-b-2 border-solid block border-gray-300 opacity-[0.6] w-[100%] my-2"></span>
      <div className="mt-2">
        <h4 className="text-lg font-medium mb-1">Select Quantity</h4>
        <select className="outline outline-offset-2 outline-1">
          {Array(product.singleProduct.quantity)
            .fill()
            .map((_, i) => {
              return <option>{i + 1}</option>;
            })}
        </select>
      </div>
      <span className="border-b-2 border-solid block border-gray-300 opacity-[0.6] w-[100%] my-2"></span>
      <div className="py-4">
        <button className="bg-orange-500 text-white px-10 py-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddCartCard;
