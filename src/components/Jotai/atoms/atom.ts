import { atom } from "jotai";
// ============================
// JOTAI
// - uses atomic states
// - have states in central store
// - harder to access the actual state
// - very lightweight, simple; avoids prop drilling
// - a "replacement" for useState
// ============================

export const usernameAtom = atom<string>("");
export const passwordAtom = atom<string>("");

export const loggedInAtom = atom<boolean>(false)

type BookType = {
    title: string,
    author: string,
    genre: string;
}

export const allBooksAtom = atom<BookType[]>([])
