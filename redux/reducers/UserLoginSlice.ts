import { createSlice } from "@reduxjs/toolkit";

//creating the initial state of data

const initialState = {

  password: "",
  username: "",
};

//creating signup slice

export const UserLoginSlice = createSlice({
  name: "UserLogin",
  initialState,
  reducers: {

    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    UserLogin: (state, action) => {
      state.password = action.payload;
      state.username = action.payload;
    },
  },
});

export const {
  setPassword,
  setUsername,
  UserLogin,
} = UserLoginSlice.actions;
export default UserLoginSlice.reducer;
