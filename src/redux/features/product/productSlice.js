import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    Products: null,
    loading: "",
    error: "",
  },
  reducers: {},
  extraReducers: {},
});

export default productSlice.reducer;
