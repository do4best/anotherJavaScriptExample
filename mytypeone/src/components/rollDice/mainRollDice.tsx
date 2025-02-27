import { useEffect, useState } from "react";
import './roll.css';

function MainRollDice() {
    const [roll, setRoll] = useState<string>("&#9860;");
    const [clickCount, setClickCount] = useState<number>(Number(localStorage.getItem("clickcount")) || 0);
    const [historyList, setHistoryList] = useState<number[]>([]);

    const handelClickRoll = () => {
        console.log("Click");
        rollDice();
    };

    useEffect(() => {
        document.documentElement.classList.add('roll-animation');
        setTimeout(() => {
            document.documentElement.classList.remove('roll-animation');
        }, 1000);
    }, [roll]);

    const getFaceDice = (roll: number) => {
        switch (roll) {
            case 1:
                return "&#9856;";
            case 2:
                return "&#9857;";
            case 3:
                return "&#9858;";
            case 4:
                return "&#9859;";
            case 5:
                return "&#9860;";
            case 6:
                return "&#9861;";
            default:
                return "";
        }
    };

    const rollDice = () => {
        const rollResult = Math.floor(Math.random() * 6) + 1;
        const diceFace = getFaceDice(rollResult);
        setRoll(diceFace);
        setHistoryList([...historyList, rollResult]);
        console.log(diceFace);
    };

    const clickCounter = () => {
        const newCount = clickCount + 1;
        setClickCount(newCount);
        localStorage.setItem("clickcount", newCount.toString());
    };

    return (
        <>
            <div className="m-auto shadow-2xl w-100 min-h-100 mt-20 rounded-2xl bg-gray-300 flex flex-col justify-center items-center ">
                <h1 className="text-2xl text-blue-500 ">A RollDice Example</h1>
                <p className="text-3xl dice" dangerouslySetInnerHTML={{ __html: roll }}></p>
                <button className="px-3 py-2 bg-gray-800 text-white" onClick={handelClickRoll}>Click to Roll</button>
                <ul>
                    {historyList.map((roll, index) => (
                        <li key={index}>Roll {index + 1}: <span dangerouslySetInnerHTML={{ __html: getFaceDice(roll) }}></span></li>
                    ))}
                </ul>
                <h1>Click Count: {clickCount}</h1>
                <p><button className="px-2 py-3 bg-black text-white" onClick={clickCounter}>Click me!</button></p>
            </div>
        </>
    );
}

export default MainRollDice;