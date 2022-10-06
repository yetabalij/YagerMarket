import { useSelector } from "react-redux";
import NavBar from "../Components/NavBar";

const Cart = () => {
  const cartItems = useSelector((state) => state.CartItems?.Items);

  return (
    <div>
      <NavBar />
      <div className="w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
        <h3 className="text-center text-3xl font-medium mb-5">My Cart</h3>
        {cartItems.length === 0 && (
          <div
            style={{
              boxShadow:
                " rgba(50, 50, 93, 0.15) 0px 1px 2px 1px, rgba(0, 0, 0, 0.15) 0px 1px 1px -1px",
            }}
            className="p-4 text-center text-xl font-medium"
          >
            <p>No Content to display.</p>
          </div>
        )}

        {cartItems?.map((item) => {
          return (
            <div
              style={{
                boxShadow:
                  " rgba(50, 50, 93, 0.15) 0px 1px 2px 1px, rgba(0, 0, 0, 0.15) 0px 1px 1px -1px",
              }}
              className="mt-2 flex justify-between items-center"
            >
              <div className="w-[20%]">
                <img src={item?.image} alt={item?._id} />
              </div>
              <div className="">
                <p>{`${item?.name.toUpperCase()}`}</p>
                <p>{`Price: $${item?.price}`}</p>
                <p>{`Amount: ${item?.amount}`}</p>
                <p>{`Total: $${item?.price * item?.amount}`}</p>
              </div>
              <button
                className="bg-orange-500 text-white py-2 px-14 rounded-sm mr-10"
                onClick={() => alert(item._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <div className="text-center mt-10">
          {cartItems.length !== 0 && (
            <button
              className="bg-orange-500 text-white py-2 px-14 rounded-sm md:text-xl md:font-medium"
              onClick={() => alert("pay")}
            >
              Pay Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
