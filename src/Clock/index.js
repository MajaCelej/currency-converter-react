import { Timer } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

    const formatDate = (date) => date.toLocaleString(undefined, {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "numeric",
        month: "long",
    });

    const date = useCurrentDate();

    return (
        <Timer>
            Dzisiejsza data: {formatDate(date)}
        </Timer>
    )
};

export default Clock;