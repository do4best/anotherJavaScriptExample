import { useState } from "react";
import { motion } from "motion/react"

function MainRollDice() {
    const [roll,setRoll] = useState<string>()
    const handelClickRoll=()=>{
        console.log("Click")
        rollDice()
    }
    const getFaceDice=(roll:number)=>{
switch(roll){
    case 1:
        return "&#9856";
        
        case 2:
        return "&#9857";
        
        case 3:
        return "&#9858";
        case 4:
        return "&#9859";
        case 5:
        return "&#9860";
        
        case 6:
        return "&#9861";
        default:
            return  ""
        
        
        
}
    }
    const rollDice=()=>{
        const rollResult = Math.floor(Math.random() * 6) + 1
        const diceFace = getFaceDice(rollResult)
        console.log(diceFace) 
    }
    return (<>
    <div className="m-auto shadow-2xl w-100 min-h-100 mt-20 rounded-2xl bg-gray-300 flex flex-col justify-center items-center ">
    <h1 className="text-2xl text-blue-500 ">A RollDice Example</h1>
   
    <p className="text-3xl">&#9860;</p>
    <button className="px-3 py-2 bg-gray-800 text-white" onClick={handelClickRoll}>Click to Roll </button>
    <ul>
        <li>Roll 1: <span>&#9856;</span></li>
        <li>Roll 2: <span>&#9860;</span></li>
    </ul>
 
    </div>
    
    </>  );
}

export default MainRollDice;