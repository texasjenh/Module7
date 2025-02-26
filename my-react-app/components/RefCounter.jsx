import { useRef, useState } from "react";

export default function RefCounter() {

    const [countState, setCountState] = useState(0)

    // once counter stored in a ref
    let countRef = useRef(0); 
    // once counter stored in a normal variable
    let count = 0;

    function handleClick() {
        // update counterRef object when clicking via current property
        countRef.current = ountRef.current + 1;
        // update counter variable when clicking
        count = count + 1;
        // both countes should be the same value

        alert(`You clicked ${countRef.current} (${count}) times!`);
    }

    return (
        <div className="RefCounter componentBox">
            <button onClick={handleClick}>
                REFCOUNTER: Click me!
            </button> Ref: {countRef.current} Var: {count} <br/>
            <button onClick={() => setCountState(countState + 1)}>
                STATE COUNTER: Click me to update!
            </button>
            State: {countState}
        </div>
    )
};