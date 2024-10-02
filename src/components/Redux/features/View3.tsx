import { useSelector, useDispatch } from "react-redux"
import { setBooks } from "../store/loginSlice"
import { RootState } from "../store/reduxStore"

export function View3(): JSX.Element {
    const dispatch = useDispatch(); 
    const username = useSelector((state: RootState) => state.login.username)
    const books = useSelector((state: RootState) => state.login.favoriteBooks); 

    return (
        <>
        Current username: {username}
        <div>This is View3, child of View2</div>
        {books?.map((book, index) => (
            <div key = {index}>
                {book.title}{book.author}{book.genre}
            </div>
        ))}
        <button onClick = {() => 
            dispatch(setBooks(
                {title: "new title",
                 author: 'new author', 
                 genre: 'new genre'}))} />
        </>
    )
}