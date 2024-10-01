import { atom, selector } from "recoil";

export const userInfo = atom<{username: string, password: string}>({
    key:"login",
    default: {
        username: "",
        password: ""
    }
})

export const loggedIn = selector<boolean>({
    key:"loggedIn", 
    get: ({get}) => {
        const { username, password } = get(userInfo)
        return username === "user" && password === "123"
    }
}) 

type BookTypes = {
    title: string, 
    author: string,
    genre: string, 
}[]

export const favoriteBooks = atom<BookTypes>({
    key: "favoriteBooks",
    default: []
})