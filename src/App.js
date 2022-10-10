import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components to route
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import SingleProduct from "./Pages/SingleProduct";
import Cart from "./Pages/Cart";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
