// import { useEffect } from "react";
import { itemToLocalStorate } from "./redux/features/product/cartItemsSlice";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components to route
import Footer from "./Components/Footer";
import SearchPage from "./Pages/SearchPage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";

function App() {
  // useEffect(() => {
  //   itemToLocalStorate();
  // }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
