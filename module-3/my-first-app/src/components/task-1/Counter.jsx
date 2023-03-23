import { useState } from "react";
import { Button } from "./Button"
import { MyText } from "./MyText";
import { TextDisplay } from "./TextDisplay";


export const Counter = () => {  
    
    const [state, setstate] = useState(0);


    const handleIncrease = () => setstate(value => value + 1); 
    
    const handleDecrease = () => setstate(value => value - 1);
  
    return (
        <>
       <MyText/>
       <Button clickado = {handleIncrease} text="Boton +"/>
       <h3><TextDisplay text={state}/></h3>
       <Button clickado = {handleDecrease} text="Boton -"/>
        </>
    )};
