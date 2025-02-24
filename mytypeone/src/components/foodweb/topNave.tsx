import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
type SideNave={
    sideNave:boolean
}
const initialState:SideNave={
    sideNave:false
}

function TopNave() {
    const [sideNave,setSideNave] = useState(initialState)
    return ( <>
    
   <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
    <div className="flex item-center">
        <div onClick={()=>setSideNave(!sideNave)} className="cursor-pointer">
            <AiOutlineMenu size={25}/>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Ravi<span>Foods</span></h1>
        <div className="hidden lg:flex items-center gap-1 bg-gray-200 rounded-full p-3 text-[14px]">
            <p className="bg-green-700 rounded-full px-2 text-white text-bold">Free </p>
            <p className="p-2 text-bold">Delivery</p>
        </div>
    </div>
    <div className="bg-gray-200 rounded-2xl flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25}/>
        <input type="text" placeholder="Search your desired food" className="bg-transparent p-2 w-full focus:outline-none" />

    </div>
    <button title="push it" className="bg-green-700 text-bold text-white hidden md:flex items-center py-2 px-6 rounded-full"><BsFillCartFill size={25}/></button>
  {sideNave?( <div className="bg-black/60 fixed w-full h-screen z-10 top-0 lef-0"></div>):("")}
  <div className={sideNave?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":
    "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose size={25}/>
    </div>
   
   </div>
    </> );
}

export default TopNave;