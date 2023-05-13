import React, { useState } from "react";
import './Counter.scss';

export const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);

    const decrement = () => {
        setCounterValue(counterValue - 1);
    }

    const increment = () => {
        setCounterValue(counterValue + 1);
    }

    return (
        <div>
            <h1>{counterValue}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};