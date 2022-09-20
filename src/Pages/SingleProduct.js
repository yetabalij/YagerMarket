import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import SingleProductCard from "../Components/SingleProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddCartCard from "../Components/AddCartCard";
import ReviewCard from "../Components/ReviewCard";

const SingleProduct = () => {
  const [loading, seatLoading] = useState(true);
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/singleproduct/${id}`)
      .then((res) => {
        setSingleProduct(res.data);
        seatLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <SingleProductCard />
      <AddCartCard />
      <ReviewCard />
    </div>
  );
};

export default SingleProduct;
