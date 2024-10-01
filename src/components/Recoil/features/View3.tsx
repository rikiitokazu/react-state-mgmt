import { useRecoilValue, useRecoilState } from "recoil"
import { loggedIn, favoriteBooks } from "../atoms/atom"

export function View3(): JSX.Element {
    const isLoggedIn = useRecoilValue(loggedIn)
    const [favBooks, setFavBooks] = useRecoilState(favoriteBooks); 

    return (
        <>
        <div>This is View3, child of View2</div>
        {isLoggedIn && <div>Logged In</div>}
        {isLoggedIn && 
        <div>
            {favBooks?.map((book, index) => (
                <div key = {index}>
                    {book.title}
                    {book.author}
                    {book.genre}
                </div>
            ))}
       </div> 
        }
        Add book: 
        <button onClick = {() => {
            setFavBooks((oldList) => [
                ...oldList,
                {
                    title: "New title", 
                    author: "New author",
                    genre: "new genre", 
                }
            ])
        }} />
        </>
    )
}