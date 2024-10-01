import { useContext } from "react"
import { ContextWrapper } from "./main"
import { View2 } from "./View2"
export default function View1() {
    const { state, dispatch } = useContext(ContextWrapper)

    return (
        <div> 
            This is in View 1
            Username: <input value= {state.username} onChange={(e) => 
                dispatch({type: "UPDATE_USERNAME", payload: e.target.value})
            }/>
            Password: <input value = {state.password} onChange={(e) => 
                dispatch({type: "UPDATE_PASSWORD", payload: e.target.value})
            } />
            LoggedIn: {String(state.loggedIn)}
            <button onClick = {() => {
                if (state.password === "123") {
                    dispatch({type: "LOG_IN_OUT", payload: ''})
                }
            }} />
            <View2 />
        </div>
    )
}