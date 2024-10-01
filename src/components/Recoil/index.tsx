import { View1 } from "./features/View1"
import { RecoilRoot } from "recoil"
/**
 * View 1 --> View 2 --> View 3
 * Use props from store in View 1 and View 2 without passing it through View 2
 * Recoil:
 *  - useRecoilState
 *  - useRecoilValue
 *  - RecoilRoot (wrapper)
 *  - atoms (and selectors)
 */
export default function RecoilExample():JSX.Element {
    return (
        <RecoilRoot>
            <div>Recoil Example</div>
            <View1 />
        </RecoilRoot>
    )
}