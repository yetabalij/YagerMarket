import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/NavBar";
import ProductListContainer from "../Components/ProductListContainer";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

const SearchPage = () => {
  const location = useLocation();
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  //values passed from the useNavigate hock.
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
      <Footer />
    </div>
  );
};

export default SearchPage;
