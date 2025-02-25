import { useEffect, useState } from "react"
import { CiLight } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md"

function SetDarkMode() {
   const [darkMode,setDarkMode] = useState<boolean>(false)
  
    const toggleButton = () => {
        document.documentElement.classList.toggle("dark-theme")
    }
    return ( <>
        <button className="" onClick={toggleButton}>   
            {darkMode ? <CiLight size={25} /> : <MdDarkMode size={25} />}
        </button>
    </> );
}

export default SetDarkMode;