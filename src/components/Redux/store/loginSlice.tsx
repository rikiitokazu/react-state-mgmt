import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginType = {
    username: string;
    password: string;
    loggedIn: boolean;
    favoriteBooks: {
        title: string,
        author: string,
        genre: string
    }[]
}
const reduxInitial : LoginType = {
    username: "", 
    password: "", 
    loggedIn: false, 
    favoriteBooks: []
}
export const loginSlice = createSlice({
    name: "login",
    initialState: reduxInitial,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    }

})

export const { setUser } = loginSlice.actions
export default loginSlice.reducer