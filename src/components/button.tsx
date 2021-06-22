import { useState } from "react";

export function Button(){
    const[counter, setCounter] = useState(0)
    function increment(){    
        setCounter(counter +1);
    }
    return (
        <button className="button" onClick={increment}>
            {counter} 
        </button>
    )
}
//named export.