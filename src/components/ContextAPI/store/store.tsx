import { produce } from "immer";


export type ContextState = {
    loggedIn: boolean;
    username: string;
    password: string;
    favoriteBooks: {
        title: string;
        author: string;
        genre: string
    }[]

}
export type ContextActions = {
    type: string,
    payload: string, 
    newBook?: ContextState["favoriteBooks"]
}
export function appReducer(state: ContextState, action: ContextActions) {
    switch(action.type) {
        case("UPDATE_USERNAME"):
            return produce(state, (draft: ContextState) => {
                draft.username = action.payload 
            });
        case("UPDATE_PASSWORD"):
            return produce(state, (draft:ContextState) => {
                draft.password = action.payload
            }); 
        case("LOG_IN_OUT"):
            return produce(state, (draft: ContextState) => {
                draft.loggedIn = !state.loggedIn 
            })
        
        case("ADD_BOOK"):
             return produce(state, (draft: ContextState) => {
                draft.favoriteBooks.push(action.newBook![0])
        })
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

export const contextInitial: ContextState = {
    loggedIn: false,
    username: "", 
    password: "", 
    favoriteBooks: []
}