import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../store/loginSlice" 
import { RootState } from "../store/reduxStore"

export function View1(): JSX.Element {
    const dispatch = useDispatch()
    const username = useSelector((state: RootState) => state.login.username)
    
    // TODO: Optimizaiton, how to not re-render the entire component upon dispatch
 return (
    <div>
       <div>Username: <input value={username} onChange = {(e) => dispatch(setUser(e.target.value))} /> 
      </div> 
      <div>Password:<input value={username} onChange = {(e) => dispatch(setUser(e.target.value))} /> </div>
    </div>
 )
}