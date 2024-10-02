// ============================
// Zustand Store
// - centralized store, uses 'set' and 'get' keywords
// ============================
import { ChangeEvent } from "react";
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
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    addBook: (book: FavoriteBook) => void;
    isLoggedIn: () => boolean
}

export const useZustandState = create<ZustandState>((set, get) => ({
    username: "",
    password: "",
    favoriteBooks: [],
    setUsername: (user) => {
        set((state) => ({
            username: user, // clarify best practice
        }))
    },
    setPassword: (user) => {
        set((state) => ({
            password: user,
        }))
    },
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