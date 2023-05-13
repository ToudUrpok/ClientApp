import React, { useState } from "react";
import classes from './Counter.module.scss';

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
            <button className={classes.btn} onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
};