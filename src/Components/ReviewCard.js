import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = () => {
  const navigate = useNavigate();
  const isUserExist = null;

  const handleSubmitReview = () => {
    if (isUserExist) {
      alert("hello");
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className="shadow-lg mt-4 w-full p-4">
      <h2 className="text-2xl font-medium">Give Your Review</h2>
      <span className="border-b-2 border-solid block border-gray-300 opacity-[0.6] w-[100%] my-2"></span>
      <div className="my-2 text-orange-500">
        <Rating
          emptySymbol={<AiOutlineStar style={{ fontSize: "1.3rem" }} />}
          fullSymbol={<AiFillStar style={{ fontSize: "1.3rem" }} />}
          start={0}
          stop={5}
          initialRating={0}
        />
      </div>
      <div>
        <input className="outline outline-1 outline-offset-1 w-full ml-[2px]" />
      </div>
      <div className="mt-3">
        <button
          className="bg-orange-500 text-white px-10 py-2"
          onClick={handleSubmitReview}
        >
          Submit Review
        </button>
      </div>
      <div className="mt-5">Place Holder for Reviews</div>
    </div>
  );
};

export default ReviewCard;
