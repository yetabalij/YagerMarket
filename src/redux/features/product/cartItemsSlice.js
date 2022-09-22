import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "CartItems",
  initialState: {
    Items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const isExist = state.Items.find(
        (item) => item._id === action.payload._id
      );
      if (isExist) {
        return {
          ...state,
          Items: state.Items.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return { ...state, Items: [...state.Items, action.payload] };
      }
    },
    itemToLocalStorate: (state) => {
      localStorage.setItem("cartItems", JSON.stringify(state.Items));
    },
  },
});

export const { addItemToCart, itemToLocalStorate } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
