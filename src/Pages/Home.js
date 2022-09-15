import React from "react";
import NavBar from "../Components/NavBar";
import ProductLists from "../Components/ProductLists";
import Search from "../Components/Search";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div className="w-[80%] mx-auto">
        <Search />
        <ProductLists />
      </div>
    </div>
  );
};

export default Home;
