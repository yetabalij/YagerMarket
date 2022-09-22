import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import cartItemsSlice from "./features/product/cartItemsSlice";

export const store = configureStore({
  reducer: {
    Products: productReducer,
    CartItems: cartItemsSlice,
  },
});
