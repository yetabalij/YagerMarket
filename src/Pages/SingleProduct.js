import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import SingleProductCard from "../Components/SingleProductCard";
import Loading from "../Components/Loading";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddCartCard from "../Components/AddCartCard";
import ReviewCard from "../Components/ReviewCard";
import Footer from "../Components/Footer";

const SingleProduct = () => {
  const [loading, seatLoading] = useState(true);
  const [singleProduct, setSingleProduct] = useState([]);
  localStorage.setItem("singleProduct", JSON.stringify(singleProduct));
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
      <div className="md:w-[90%] lg:w-[80%] mx-auto overflow-hidden">
        {loading ? (
          <Loading />
        ) : (
          <div className="md:grid grid-cols-2 gap-4 lg:gap-10 xl:gap-20">
            <div className="">
              <SingleProductCard className="" />
            </div>
            <div className="flex flex-col">
              <AddCartCard />
              <ReviewCard />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
