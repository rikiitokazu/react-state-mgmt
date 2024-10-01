import { View1 } from "./features/View1"
import { RecoilRoot } from "recoil"
/**
 * View 1 --> View 2 --> View 3
 * Use props from store in View 1 and View 2 without passing it through View 2
 */
export default function RecoilExample():JSX.Element {
    return (
        <RecoilRoot>
            <View1 />
        </RecoilRoot>
    )
}