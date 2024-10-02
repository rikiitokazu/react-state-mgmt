/**
 * View 1 --> View 2 --> View 3
 * Use props from store in View 1 and View 2 without passing it through View 2
 */
import { View1 } from "./features/View1";

export default function JotaiExample(): JSX.Element {
    return (
        <>
        <header>Jotai</header>
        <View1 />
        </>
    )
}