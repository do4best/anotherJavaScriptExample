import { useState } from "react";

function MainPomodoroMeter() {
    const [start, setStart] = useState<string>();
    const [formattedTime, setFormattedTime] = useState<string>("25:00");

    let interval;
    let timeLeft = 1500;

    function updateTimer(): void {
        let minute = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        let formattedTime = `${minute.toString().padStart(2, "0")} :  ${seconds.toString().padStart(2, "0")}`;
        setFormattedTime(formattedTime);
    }

    const clickStart = () => {
         interval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if (timeLeft === 0) {
                clearInterval(interval);
                alert("Time is Up");
                timeLeft = 1500;
            }
        }, 1000);
    };

    const clickPause = () => {
        clearInterval(interval);
    };

    const clickStop = () => {
        clearInterval(interval);
        timeLeft = 1500;
    };

    return (
        <>
            <div className="box-border min-w-100 min-h-100 border rounded-2xl shadow m-auto">
                <h1 className="text-2xl text-red-600 bg-black text-center p-3">Pomodoro Meter</h1>
                <p className="text-4xl text-center m-5">{formattedTime}</p>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <button className="btn btn-primary" onClick={clickStart}>Start</button>
                    <button className="btn btn-secondary" onClick={clickPause}>Pause</button>
                    <button className="btn btn-primary" onClick={clickStop}>Stop</button>
                </div>
            </div>
        </>
    );
}

export default MainPomodoroMeter;