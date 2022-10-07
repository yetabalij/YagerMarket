import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import ProductLists from "../Components/ProductLists";
import Search from "../Components/Search";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <div className="w-[86%] mx-auto sm:grid grid-cols-12">
        <div className="col-span-2">
          <Search />
        </div>
        <div className="col-span-10">
          <ProductLists />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
