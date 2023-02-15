import { createSlice } from "@reduxjs/toolkit";

//creating the initial state of data

const initialState = {
  subRedditType: "",
  subRedditContent: "",
};

//creating signup slice

export const SubRedditSlice = createSlice({
  name: "SubReddit",
  initialState,
  reducers: {
    setSubRedditType: (state, action) => {
      state.subRedditType = action.payload;
    },
    setSubRedditContent: (state, action) => {
      state.subRedditContent = action.payload;
    },
    SubReddit: (state, action) => {
      state.subRedditType = action.payload;
      state.subRedditContent = action.payload;
    },
  },
});

export const { setSubRedditType, setSubRedditContent, SubReddit } = SubRedditSlice.actions;
export default SubRedditSlice.reducer;
