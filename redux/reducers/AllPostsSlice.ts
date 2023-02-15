import { createSlice } from "@reduxjs/toolkit";

//creating the initial state of data

const initialState = {
  id: "",
 
};

//creating signup slice

export const AllPostSlice = createSlice({
  name: "AllPosts",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },

    post: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId, post } = AllPostSlice.actions;
export default AllPostSlice.reducer;
