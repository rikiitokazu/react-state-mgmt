import { produce } from "immer";


export type ContextState = {
    loggedIn: boolean;
    username: string;
    password: number;
    favoriteBook: {
        title: string;
        author: string;
        genre: string
    }

}
export type ContextActions = {
    state: any
    action: {
        type: string;
        payload: string
        newBook: ContextState['favoriteBook']
    }
}
export function AppReducer({state, action}: ContextActions) {
    switch(action.type) {
        case("UPDATE_USERNAME"):
            return produce(state, (draft: ContextState) => {
                draft.username = action.payload 
            });
        case("LOG_IN_OUT"):
            return produce(state, (draft: ContextState) => {
                draft.loggedIn = !state.loggedIn 
            })
        
        case("CHANGE_BOOK") :
             return produce(state, (draft: ContextState) => {
                draft.favoriteBook = action.newBook
        })
    }
}