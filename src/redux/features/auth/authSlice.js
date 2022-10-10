import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlcie = createSlice({
  name: "auth",
  initialState: {
    User: {},
  },
  reducers: {
    signup: (state, action) => {
      const { formValue, navigate } = action.payload;
      axios
        .post("http://localhost:5000/api/auth/signup", formValue)
        .then((res) => console.log(res.data));
      //alert(JSON.stringify(formValue));
      //navigate("/");
    },
  },
});

export const { signup } = authSlcie.actions;
export default authSlcie.reducer;
