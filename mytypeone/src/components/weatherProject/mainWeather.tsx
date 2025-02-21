import {useState} from "react";

type inputValue={
    city:string
}
function MainWeather() {
    const [city,setCity] = useState<inputValue|number>()

    return (
        <>
            <div className="box-content max-w-400 border-4 p-10 m-auto my-20 rounded-8 shadow text-center">
                <input className="placeholder-shown:border-gray-200 block w-full" placeholder="Enter City Name" value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>

        </>
    );
}

export default MainWeather;