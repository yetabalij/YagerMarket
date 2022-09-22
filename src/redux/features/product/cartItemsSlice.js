import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "CartItems",
  initialState: {
    Items: [],
  },
  reducers: {},
});

export default cartItemsSlice.reducer;
