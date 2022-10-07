import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components to route
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import SearchPage from "./Pages/SearchPage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Signin from "./Pages/Signin";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
