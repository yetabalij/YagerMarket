import React from "react";
import Loading from "./Loading";
import Product from "./Product";

const ProductListContainer = ({ loading, searchData }) => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-col items-center">
        {loading && <Loading />}
        {searchData.length !== 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {searchData.map((product, key) => {
              return (
                <div key={key}>
                  <Product product={product} />
                </div>
              );
            })}
          </div>
        ) : (
          <p>No result found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductListContainer;
