import { View3 } from "./View3"

export function View2(): JSX.Element {
    return (
        <div>
            This is in View 2, a child of View 1
            <View3 />
        </div>
    )
}