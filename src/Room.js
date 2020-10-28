import { useState } from "react";
import './Room.css';

function Room(){
    let [isLit, setLit] = useState(false);
    let [temp, setTemp] = useState(0);
    function toggleLight()
    {
        
        setLit(isLit? false:true);
        
        console.log(JSON.stringify(isLit));
        console.log("Button Clicked");
    }
    function incTemp()
    {
        setTemp(++temp);
        console.log("Button Clicked");

    }
    function decTemp()
    {
        setTemp(--temp);
        console.log("Button Clicked");

    }
    function onLight()
    {
        if(isLit===false)   setLit(!isLit);
    }
    function offLight()
    {
        if(isLit===true)   setLit(!isLit);
    }
    
    return (
        <div className={`room ${isLit? "lit":"dark"}`}>This Room is {isLit ? "lit":"dark"} 
            <br/>
            <button onClick={toggleLight}>Flip</button>
            <button onClick={onLight}>On</button>
            <button onClick={offLight}>Off</button>
            <br/>
            Temperature : {temp}
            <br/>
            <button onClick={incTemp}> + </button>
            <button onClick={decTemp}> - </button>
        </div>
        

    );
}
export default Room;