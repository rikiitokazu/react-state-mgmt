import { useZustandState } from "../store/store"
import { View2 } from "./View2";

export function View1(): JSX.Element {
    const { username, password, setUsername, setPassword } = useZustandState(); 
    return (
        <div>
          <header>This is view1</header> 
          Username: <input value = {username} onChange = {setUsername} />
          Password: <input value ={password} onChange = {setPassword} />
          <View2 />
        </div>
    )
}