// ============================
// Zustand Store
// - centralized store, uses 'set' and 'get' keywords
// ============================
import { create } from "zustand";

type FavoriteBook = {
    title: string;
    author: string;
    genre: string;
}
type ZustandState = {
    username: string,
    password: string,
    favoriteBooks: FavoriteBook[];
    addBook: (book: FavoriteBook) => void;
    isLoggedIn: () => boolean
}

export const useZustandState = create<ZustandState>((set, get) => ({
    username: "",
    password: "",
    favoriteBooks: [],
    addBook: (book) => {
        set((state) => ({
            favoriteBooks:[...state.favoriteBooks, {...book}]
        }))
    },
    isLoggedIn: () => {
        const username = get().username;
        const password = get().password;
        return username === "user" && password === "123"

    }
}))