import { useZustandState } from "../store/store"
import { View2 } from "./View2";

export function View1(): JSX.Element {
    const { username, password, setUsername, setPassword } = useZustandState(); 
    return (
        <div>
          <header>This is view1</header> 
          Username: <input value = {username} 
          onChange = {(e) => setUsername(e.target.value as string)} />
          
          Password: <input value ={password} 
          onChange = {(e) => setPassword(e.target.value as string)} />
          <View2 />
        </div>
    )
}