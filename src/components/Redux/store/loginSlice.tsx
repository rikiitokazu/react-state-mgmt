import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type FavBookType = {
    title: string;
    author: string;
    genre: string
}
type LoginType = {
    username: string;
    password: string;
    loggedIn: boolean;
    favoriteBooks: FavBookType[];
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
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setBooks: (state, action: PayloadAction<FavBookType>) => {
            state.favoriteBooks = [...state.favoriteBooks, {...action.payload}]
        }
    }

})

export const { setUser, setPassword, setBooks } = loginSlice.actions
export default loginSlice.reducer