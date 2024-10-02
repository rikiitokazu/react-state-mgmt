import { atom } from "jotai";
// ============================
// JOTAI
// - uses atomic states
// ============================

export const username = atom<string>("");
export const password = atom<string>("");

export const loggedIn = atom<boolean>(false)

type BookType = {
    title: string,
    author: string,
    genre: string;
}

export const allBooks = atom<BookType[]>([])
