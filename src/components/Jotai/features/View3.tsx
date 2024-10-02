import { useAtom } from "jotai"
import { usernameAtom, passwordAtom, loggedInAtom, allBooksAtom } from "../atoms/atom"
import { useCallback } from "react";

export function View3(): JSX.Element {
    const [username] = useAtom(usernameAtom);
    const [password] = useAtom(passwordAtom); 
    const [isLogged, setIsLogged] = useAtom(loggedInAtom);
    const [books, setBooks] = useAtom(allBooksAtom); 

    // useCallback so function only runs when username and password changes
    const verifyLogin = useCallback(() => {
        if (username === "user" && password === "123") {
            setIsLogged(true)
        }
    },[username, password])

    const testFunction = () => {
        console.log("---TEST---")
    }
 

    return (
        <>
        <div>This is View 3, child of View 2</div>
        {isLogged && 
            <div>
                {books.map((book, index) => (
                    <div key = {index}>
                        {book.title}{book.author}{book.genre}
                    </div>
                ))}
            </div> 
        } 
       Verify Login: <button onClick = {verifyLogin} />

       Add Book: <button onClick = {() => 
            setBooks([...books, { 
                title: "new book",
                author: "new author",
                genre: "new"
            }])} />
        </>
    )
}