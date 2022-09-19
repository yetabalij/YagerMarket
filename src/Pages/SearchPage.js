import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import ProductListContainer from "../Components/ProductListContainer";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  const start = location.state.start;
  const end = location.state.end;
  const Value = {
    start,
    end,
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/product/search", Value)
      .then((res) => {
        setSearchData(res.data.searchProduct);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <ProductListContainer loading={loading} searchData={searchData} />
    </div>
  );
};

export default SearchPage;
