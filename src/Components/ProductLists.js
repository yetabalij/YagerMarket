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
    <div>
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
      <div>
        <button onClick={() => setPageNumber(Math.max(0, pageNumber - 1))}>
          Previous
        </button>
        {pages.map((index) => {
          return (
            <button onClick={() => setPageNumber(index)} key={index}>
              {index + 1}
            </button>
          );
        })}
        <button
          onClick={() =>
            setPageNumber(Math.min(totalPages - 1, pageNumber + 1))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductLists;
