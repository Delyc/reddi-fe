import { createSlice } from "@reduxjs/toolkit";


//creating the initial state of data

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: ""

}


//creating signup slice

export const UserSignupSlice = createSlice({
    name: "UserSignup",
    initialState,
    //creating reducer
    reducers: {
        setUserFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        },
        UserSignup: (state, action) => {
            state.firstName = action.payload
            state.lastName = action.payload
            state.email = action.payload
            state.password = action.payload
            state.username = action.payload

        },
    }
})

export const { setUserFirstName, setLastName, setEmail, setPassword, setUsername, UserSignup } = UserSignupSlice.actions;
export default UserSignupSlice.reducer;
