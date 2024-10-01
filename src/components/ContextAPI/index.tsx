/**
 * View 1 --> View 2 --> View 3
 * Use props from store in View 1 and View 2 without passing it through View 2
 */
import ContextAPIMain from "./features/main";
import View1 from "./features/View1";


export default function ContextAPI() :JSX.Element {
    return (
        <ContextAPIMain>
            <div>Context API + useReducer + Immer example</div>
            <View1 />
        </ContextAPIMain>
    )
}