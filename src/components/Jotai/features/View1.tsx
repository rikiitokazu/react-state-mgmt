import { useAtom } from "jotai"
import { usernameAtom, passwordAtom } from "../atoms/atom"

export function View1(): JSX.Element {
    const [username, setUsername] = useAtom(usernameAtom)
    const [password, setPassword] = useAtom(passwordAtom)
    
    return (
        <>
        <div>Hello</div>
        Username: <input value = {username} 
        onChange = {(e) => setUsername(e.target.value as string)} />
        Password: <input value = {password}
        onChange = {(e) => setPassword(e.target.value as string)} />
        </>
    )
}