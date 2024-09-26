 import { store } from "./store/reduxStore"
 import { Provider } from "react-redux"

export default function ReduxExample() {
    return (
        <Provider store={store}>
            Testing testing
        </Provider>
    )
}