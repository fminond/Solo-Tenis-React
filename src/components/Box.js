import { useState } from "react";

function Box () { 
    const [color,setColor] = useState("purple");
    return <div style ={{height: "10vh", backgroundColor: color}}></div>
}
export default Box; 