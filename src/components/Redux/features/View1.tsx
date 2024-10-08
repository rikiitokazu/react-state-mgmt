import { useDispatch, useSelector } from "react-redux"
import { setUser, setPassword } from "../store/loginSlice"
import { RootState } from "../store/reduxStore"
import { View2 } from "./View2"

export function View1(): JSX.Element {
    const dispatch = useDispatch()
    const username = useSelector((state: RootState) => state.login.username)
    const password = useSelector((state: RootState) => state.login.password)
    
    // TODO: Optimizaiton, how to not re-render the entire component upon dispatch
 return (
    <div>
       <div>Username: <input value={username} 
       onChange = {(e) => dispatch(setUser(e.target.value))} /> 
      </div> 
      <div>Password:<input value={password} 
      onChange = {(e) => dispatch(setPassword(e.target.value))} /> </div>
      
      <View2 />
    </div>
 )
}