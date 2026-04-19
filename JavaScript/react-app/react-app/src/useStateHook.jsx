import React, {useState} from   'react'           // using object destructuring to only import useState instead of the whole react library

function UseStateHook(){

    const [name, setName] = useState("Guest");         // array destructuring, useState function returns an array with a stateful variable and a setter function with naming convention of setVariableName, "Guest" is an initial state
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Spongebob");               // this will update automatically without a refresh
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployeedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={updateAge}>Incremenet Age</button>

                <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployeedStatus}>Toggle Employment</button>
            </div>
          )
}

export default UseStateHook