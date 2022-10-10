import { createSlice } from "@reduxjs/toolkit";

const authSlcie = createSlice({
  name: "auth",
  initialState: {
    User: {},
  },
  reducers: {
    signup: (state, action) => {
      console.log("ok");
    },
  },
});

export const { signup } = authSlcie.actions;
export default authSlcie.reducer;
