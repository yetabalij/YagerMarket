import React from "react";

const SingleProductCard = ({ className }) => {
  const product = JSON.parse(localStorage.getItem("singleProduct"));

  return (
    <div className={`p-4 shadow-xl ${className}`}>
      <div className="">
        <h3 className="text-lg uppercase font-medium">
          {product.singleProduct.name}
        </h3>
        <span className="border-b-2 border-solid block border-gray-300 opacity-[0.6] w-[100%] my-2"></span>
      </div>
      <img
        className="mb-4"
        src={product.singleProduct.image}
        alt={product.singleProduct.name}
      />
      <p className="justify-center content-center">
        {product.singleProduct.description}
      </p>
    </div>
  );
};

export default SingleProductCard;
