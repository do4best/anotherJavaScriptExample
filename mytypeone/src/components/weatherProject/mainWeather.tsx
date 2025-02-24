import {useState} from "react";

type inputValue={
    city:string
}
const initialState:inputValue ={city:""}
function MainWeather() {
    const [city,setCity] = useState<inputValue>(initialState)

    return (
        <>
            <div className="box-content max-w-400 border-4 p-10 m-auto my-20 rounded-8 shadow text-center">
                <input className="placeholder-shown:border-gray-200 block w-full" placeholder="Enter City Name" value={city.city} onChange={(e)=>setCity({city: e.target.value})}/>
                <h1>{city.city}</h1>
            </div>

        </>
    );
}

export default MainWeather;