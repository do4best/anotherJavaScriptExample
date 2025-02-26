import { useState } from "react";

function MainTipCalculator() {
    const [bill, setBill] = useState<number | undefined>();
    const [commission, setCommission] = useState<number | undefined>();
    const [displayResult,setDisplayResult] = useState<number>()

    const handleClicked = () => {
        if (bill && commission) {
            const total = bill * (1 + commission / 100);
            setDisplayResult(total)
        }
        return 0;
    };

    return ( <>
        <div className="box-border h-100  w-150 border-1 m-auto mt-2 shadow-2xl flex flex-col justify-center rounded-2xl">
            <h1 className="text-center  font-bold text-2xl text-gray-800 bg-red-500 p-3 rounded mb-2 ">Tip Calculator</h1>
            <p className="ml-2">Enter the amount for bill for percentage</p>
            <div className="flex flex-col items-start ml-2">
                <label htmlFor="" className="text-2xl text-gray-800 bg-green-500 p-1 rounded mb-2">Enter The Amount for billing</label>
                <input type="number" className="w-1/2 border " placeholder="Enter your Bill" onChange={(e) => setBill(parseFloat(e.target.value))} />

                <label htmlFor="" className="text-2xl text-gray-800 mt-2 bg-green-500 p-1 rounded mb-2">Enter The Percentage Amount </label>
                <input type="number" className="w-1/2 border " placeholder="Enter your Percentage" onChange={(e) => setCommission(parseFloat(e.target.value))} />
                <button className="w-full py-2 bg-blue-600 text-white mt-3 rounded hover:bg-blue-300 transition-discrete" onClick={handleClicked}>Calculate Amount</button>
                <h1 className="text-center  font-bold ">Your billing percentage is :{displayResult} amount </h1>  
            </div>
        </div>
    </> );
}

export default MainTipCalculator;