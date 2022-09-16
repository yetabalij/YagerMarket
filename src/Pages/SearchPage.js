import React from "react";
import NavBar from "../Components/NavBar";
import { useLocation } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  return (
    <div>
      <NavBar />
      {location.state.start}
      {location.state.end}
    </div>
  );
};

export default SearchPage;
