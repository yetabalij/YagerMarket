import React from "react";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Product = ({ product }) => {
  return (
    <div className="bg-gray-50 shadow-md min-h-full">
      <img src={product?.image} alt={product?.name} />
      <div className="mx-2">
        <h3 className="py-2 uppercase font-medium">{product?.name}</h3>
        <p>{`${product?.description.substring(0, 150)} ...`}</p>
        <div className="my-2 text-orange-500">
          {
            <Rating
              emptySymbol={<AiOutlineStar style={{ fontSize: "1.3rem" }} />}
              fullSymbol={<AiFillStar style={{ fontSize: "1.3rem" }} />}
              start={0}
              stop={5}
              initialRating={product?.ratting}
              readonly
            />
          }
        </div>
        <p className="mb-4 text-xl font-medium">{`$ ${product?.price}`}</p>
      </div>
    </div>
  );
};

export default Product;
