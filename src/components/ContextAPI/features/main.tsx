import { createContext, useReducer } from "react"
import { appReducer, ContextState, ContextActions, contextInitial } from "../store/store"


type ContextType = {
    state: ContextState,
    dispatch: React.Dispatch<ContextActions>
}
export const ContextWrapper = createContext<ContextType>({
    state: contextInitial,
    dispatch: () => null,
})

// Usually, it's best practice to have two different context for state & dispatch
export default function ContextAPIMain({children}:{children:React.ReactNode}): JSX.Element {
    const [state, dispatch] = useReducer(appReducer, contextInitial)
    return (
        <ContextWrapper.Provider value={{state, dispatch}}>
            {children}
        </ContextWrapper.Provider>
    )

}