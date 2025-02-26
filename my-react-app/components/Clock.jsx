import{ useState, useEffect } from "react"

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => tick(), 1000);
        console.log('Clock component mounted');
}, []);

    const tick = () => {
        setDate(new Date());
        console.log('tick');
    };

    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );
}

export default Clock