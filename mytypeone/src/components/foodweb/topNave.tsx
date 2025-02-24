import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { FaMoneyBill, FaScaleBalanced } from "react-icons/fa6";
import { MdBorderOuter } from "react-icons/md";
type SideNave={
    SideNave:boolean,
    
}
const initialState:SideNave={

    SideNave:false
}


function TopNave() {
    const [sideNave,setSideNave] = useState(initialState)
    function toggleNave(): void {
        setSideNave({ SideNave: !sideNave.SideNave });
        console.log("Click");
    }
    return ( <>
    
   <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
    <div className="flex item-center">
        <div onClick={toggleNave} className="cursor-pointer">
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
  {sideNave.SideNave ? (<div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0" onClick={toggleNave}></div>) : ("")}
  <div className={sideNave.SideNave ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose onClick={toggleNave} className="absolute right-4 top-4 cursor-pointer" size={25}/>
        <h2 className="text-2xl p-4">Ravi<span className="text-green-700 font-bold">Foods</span></h2>
        <nav>
            <ul className="flex flex-col p-4 text-gray-900">
                <li className="text-xl py-4 flex">
                    <BsPerson size={35} className="mr-4 text-white bg-black rounded-full py-2 "/>
                    My Account
                </li>
                <li className="text-xl py-4 flex">
                    <MdBorderOuter size={35} className="mr-4 text-white bg-black rounded-full py-2 "/>
                    My Order
                </li>
                <li className="text-xl py-4 flex">
                    <FaScaleBalanced size={35} className="mr-4 text-white bg-black rounded-full py-2 "/>
                    My Balance
                </li>
                <li className="text-xl py-4 flex">
                    <FaMoneyBill size={35} className="mr-4 text-white bg-black rounded-full py-2 "/>
                    My Money
                </li>
            </ul>
        </nav>
    </div>
   
   </div>
    </> );
}

export default TopNave;