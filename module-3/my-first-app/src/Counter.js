import { useState } from "react";
import { Value } from "./components/Value";

export const Counter = () => {  
    
    const [state, setstate] = useState(0);


    const handleIncrease = () => {
        setstate(
            (value) => value + 1);
    }; 
    
    const handleDecrease = () => setstate(
        (value) => value - 1);
    return (
        <>
       <button onClick = {handleIncrease}>Button +</button>
       {/* <h2>{state}</h2> */}
       <h2><Value state={state}/></h2>
       <button onClick = {handleDecrease}>Button -</button>
        </>
    ) }