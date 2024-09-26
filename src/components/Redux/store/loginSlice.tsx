import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// String || string
type LoginType = {
    username: String;
    password: String;
    loggedIn: boolean;
}
const INITIAL_STATE : LoginType = {
    username: "", 
    password: "", 
    loggedIn: false, 
}
export const loginSlice = createSlice({
    name: "login",
    initialState: INITIAL_STATE,
    reducers: {
        setUser: (state, action: PayloadAction<String>) => {
            state.username = action.payload
        }
    }

})

export const { setUser } = loginSlice.actions
export default loginSlice.reducer