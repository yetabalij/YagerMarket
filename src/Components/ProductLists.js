import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";
import Loading from "./Loading";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const pages = new Array(totalPages).fill(null).map((v, i) => i);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product?page=${pageNumber}`)
      .then((res) => {
        setProducts(res.data.products);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      });
  }, [pageNumber]);

  return (
    <div className="flex flex-col items-center">
      {loading && <Loading />}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {products.map((product, key) => {
          return (
            <div key={key}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
      <div className="mt-10 flex gap-1">
        <button onClick={() => setPageNumber(Math.max(0, pageNumber - 1))}>
          <p className="text-[#232f3e] text-lg">Previous</p>
        </button>
        {pages.map((index) => {
          return (
            <button onClick={() => setPageNumber(index)} key={index}>
              <p className="bg-orange-500 text-white py-[1px] px-[8px]">
                {index + 1}
              </p>
            </button>
          );
        })}
        <button
          onClick={() =>
            setPageNumber(Math.min(totalPages - 1, pageNumber + 1))
          }
        >
          <p className="text-[#232f3e] text-lg">Next</p>
        </button>
      </div>
    </div>
  );
};

export default ProductLists;
