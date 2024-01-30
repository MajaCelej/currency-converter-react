import { Timer } from "./styled";
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
        <Timer>
            Dzisiejsza data: {currentDate}, {currentHour} 
        </Timer>
    )
};

export default Clock;