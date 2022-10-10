import { creatSlice } from "@reduxjs/toolkit";

const authSlcie = creatSlice({
  name: "auth",
  initialState: {
    User: {},
  },
  reducers: {
    signup: () => {
      alert("ok");
    },
  },
});

export const { signup } = authSlcie.action;
export default authSlcie.reducers;
