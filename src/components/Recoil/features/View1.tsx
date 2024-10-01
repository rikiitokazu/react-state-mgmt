import { useRecoilState } from "recoil"
import { userInfo } from "../atoms/atom"
import { View2 } from "./View2"

export function View1(): JSX.Element {
    const [user, setUser] = useRecoilState(userInfo)
    return (
        <div>
           Username: <input value = {user.username} 
           onChange = {(e) => setUser({...user, username: e.target.value})} />

           Password: <input value = {user.password} 
           onChange = {(e) => setUser({...user, password: e.target.value})} />
            <View2 />
       </div>
    )
}