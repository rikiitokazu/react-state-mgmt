 import { store } from "./store/reduxStore"
 import { Provider } from "react-redux"
import { View1 } from "./features/View1"

 /**
 * View 1 --> View 2 --> View 3
 * Use props from store in View 1 and View 2 without passing it through View 2
 * TODO: Redux (toolkit) also supports async, createAsynThunk
 *  -- return new Promise((resolve) => setTimeout(resolve, 500))
 */
export default function ReduxExample() {
    return (
        <Provider store={store}>
            <div>Redux</div>
            <View1 />
        </Provider>
    )
}