import "./style.css";
import { useState, useEffect } from "react";

const Clock = () => {

    const [date, setDate] = useState();

    const time = new Date()
    const currentDate = time.toLocaleString("pl",  {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const currentHour = time.toLocaleString({
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);
   
        return () => {
            clearInterval(intervalId)
        };
    }, []);

    return (
        <div className="clock">Dzisiejsza data: {currentDate}, {currentHour} </div>
    )
};

export default Clock;