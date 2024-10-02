/**
* View 1 --> View 2 --> View 3
* Use props from store in View 1 and View 2 without passing it through View 2
* Zustand
* - no provider
* - minalistic, subscription model 
*/
import { View1 } from "./features/View1"
export default function ZustandExample() {
   return (
        <>
        <header>Zustand</header>
        <View1 />
        </>
   )
}