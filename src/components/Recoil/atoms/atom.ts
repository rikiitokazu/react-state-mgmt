import { atom, selector } from "recoil";

export const userInfo = atom<{user: string, password: string}>({
    key:"login",
    default: {
        user: "",
        password: ""
    }
})

export const loggedIn = selector<boolean>({
    key:"loggedIn", 
    get: ({get}) => {
        const { user, password } = get(userInfo)
        return user === "user" && password === "123"
    }
}) 

type BookTypes = {
    title: "", 
    author: "",
    genre:""
}[]

export const favoriteBooks = atom<BookTypes>({
    key: "favoriteBooks",
    default: []
})