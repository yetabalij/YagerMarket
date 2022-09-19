import React from "react";
import Loading from "./Loading";
import Product from "./Product";

const ProductListContainer = ({ loading, searchData }) => {
  return (
    <div className="flex flex-col items-center">
      {loading && <Loading />}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {searchData.map((product, key) => {
          return (
            <div key={key}>
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListContainer;
