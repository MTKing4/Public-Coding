import React, { useState } from 'react';

function CounterUpdFun() {

    const [count, setCount] = useState(0);

    function increment(){


    // TLDR: updater functions are used when you want to call the setter function multiple times
    //       but each time it's called the stateful variable is reset because its state didn't update
    //       so we use an updater function (arrow function) to update the stateful variable each time we call the setter function

    // example without an updater function
    // setCount(count + 1);

    // example with an updater function
    // setCount(prevCount => prevCount + 1);       // variable name changed for naming conventions, this way you have the previous state memorized the next time the setter function is called


    //dumb explanation by teacher below, chad explanation above

    // Uses the CURRENT state to calculate the NEXT state.
    // set functions do not trigger an update.
    // React batches together state updates for performance reasons.
    // NEXT state becomes the CURRENT state after an update.

    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);            // this will update only once not 3 times because count doesn't get updated after each set so it's always 0 + 1


    // this below now takes the PENDING state to calculate the NEXT state.
    // React puts your updater function in a queue (waiting in line) (queue as in data struture)
    // During the next render, it wil call them in the same order
    // this is called multiple state updates
    
    setCount(prevCount => prevCount + 1);       // by convention we rename count arugment to the arrow function to something like prevCount
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);       // this now will be applied 3 times, meaning count is getting updated each time

    };

    function decrement(){
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
        setCount(prevCount => prevCount - 1);
    };

    function reset(){
        setCount(0);        // updater function won't be necessary here because we don't need the previous state
    }

    return(<div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>

            </div>)
}

export default CounterUpdFun