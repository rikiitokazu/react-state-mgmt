import { useContext } from "react"
import { ContextWrapper } from "./main"
export function View3(): JSX.Element {
    const { state, dispatch } = useContext(ContextWrapper)
    return (
        <>
        <div>This is View 3, the child of View2</div>
        {state.loggedIn && <div>Hello</div>}

        {state.favoriteBooks.map((book,index) => {
            return (
            <div key = {index}>
                Title: {book.title}
                Author: {book.author}
                Genre: {book.genre}
            </div>
            )
        })}
        <header>Add Book</header>
        <button onClick = {() => {
            dispatch({type:"ADD_BOOK", newBook: [{
                title:"title 2",
                author: "author 2", 
                genre: "genre 2"
            }], payload: ""})
        }}  />
        </>
    )
}