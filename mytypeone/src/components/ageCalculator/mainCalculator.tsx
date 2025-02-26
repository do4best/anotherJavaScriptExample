import { useState } from "react";
import { HiNewspaper } from "react-icons/hi";

function MainCalculator() {
    const [age,setAge] = useState<number>()
    const [newAge,setNewAge] = useState<string>()
    const handelClicked=()=>{
        if(!age){
            alert("Please Enter your Age")
        }else{
            const newage = setAge(getAge(age))
            console.log(newage)
        }
        
        console.log("Clicked")
    }
    const getAge=(age:number):number =>{
const currentDate = new Date()
const birthDayYear = new Date(age)
let calculateAge = currentDate.getFullYear() - birthDayYear.getFullYear();
const calculateMonth = currentDate.getMonth() - birthDayYear.getMonth()
if(calculateMonth < 0 || (calculateMonth === 0 && currentDate.getDate() < birthDayYear.getDate())){
    calculateAge--

}

return calculateAge
    }
    return ( <>
    
    <div className="box-border h-75  w-150 border-1 m-auto mt-2 shadow-2xl flex flex-col justify-center rounded-2xl">
        <h1 className="text-center  font-bold text-2xl text-blue-400 bg-black p-3 rounded mb-2 ">Enter Your Age</h1>
        <div className="flex flex-col items-center justify-between">
        <label htmlFor="" className="text-2xl text-blue-400 bg-black p-3 rounded mb-2">Enter Your Date of Birth</label>
        <input type="date" className="w-1/2 border " placeholder="Enter your Age" onChange={(e)=>setAge(e.target.value)} />
        <button className="px-4 py-2 bg-blue-600 text-white mt-3 rounded" onClick={handelClicked}>Calculate Age</button>
        <h1 className="text-center  font-bold ">Your Calculated Age is :{age} Years </h1>  </div>
    </div>
    </> );
}

export default MainCalculator;