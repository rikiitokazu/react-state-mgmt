import { useZustandState } from "../store/store"

export function View3(): JSX.Element {
    const { favoriteBooks, addBook, isLoggedIn } = useZustandState();
    return (
        <>
        <div>This is View3, child of View2</div>
        {isLoggedIn ?? <div>Loggedin</div>}
        {favoriteBooks.map((book,index) => (
            <div key={index}>{book.title}{book.author}{book.genre}</div>
        ))}
        <button onClick = {() => addBook({
            title:"new title",
            author: "new author",
            genre: "new genre"
        })} />
        </>
    )
}