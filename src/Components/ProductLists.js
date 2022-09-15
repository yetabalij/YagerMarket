import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/product").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product, key) => {
        return (
          <div key={key}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductLists;
