import React, { useState } from 'react';

function UpdObjSt(){

    const [car, setCar] = useState({year: 2024, make: "Nissan", model: "Altima"});


    function handleYearChange(event){
        // setCar({year: 2025});               // here this object is replacing the object in the useState() so we're losing the properties we're not using, instead we'll use a spread operator
        setCar( prevCar=> ({...prevCar, year: event.target.value}));          // using a spread operator, we're adding {year: 2024, make: "Nissan", model: "Altima" year: 2025} when we have two properties with the same name, the later one overwrites the previous one
    }               // using {} after arrow functions, JavaScript thinks you're trying to write a multi line statement, but here it's not the case, we're trying to create an object, so we add () around it which will allow you to create an object with arrow functions

    function handleMakeChange(event){
        setCar( prevCar => ({...prevCar, make: event.target.value}) )
    }

    function handleModelChange(event){
        setCar( prevCar => ({...prevCar, model: event.target.value}))
    }

    return(<div>
        <p> your favorite car is: {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleYearChange}></input><br />
        <input type="text" value={car.make} onChange={handleMakeChange}></input><br />
        <input type="text" value={car.model} onChange={handleModelChange}></input><br />
    </div>)
}

export default UpdObjSt