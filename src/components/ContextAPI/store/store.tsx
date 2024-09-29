import { useReducer } from "react";
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
    action: any
}
export function AppReducer({state, action}: ContextActions) {
    switch(action.type) {
        case("CHANGE_VAL"):
            return produce(state, (draft: any) => {
                draft[action.fieldName] = action.payload 
            });
        case("LOGIN"):
            return produce(state, (draft: any) => {
                draft.loggedIn = true
            })

    }
}