import NavBar from "../Components/NavBar";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  return (
    <div>
      <NavBar />
      Cart
      {cartItems?.map((item) => {
        return <h3>{item.name}</h3>;
      })}
    </div>
  );
};

export default Cart;
