import React, { useState } from 'react'

function UpdArrObjSt(){

    const[cars, setCars] = useState([]);
    const[carYear, setcarYear] = useState(new Date().getFullYear());
    const[carMake, setcarMake] = useState("");
    const[carModel, setcarModel] = useState("");


    function handleAddCar(){
        
        const newCar = {year: carYear, make: carMake, model: carModel};

        setCars(prevCars => [...prevCars, newCar]);

        //clearing the text fields
        setcarYear(new Date().getFullYear());
        setcarMake("");
        setcarModel("");

    }

    function handleRemoveCar(index){

        setCars(prevCars => prevCars.filter((_, indexOfCar) => indexOfCar !== index));
    }

    function handleYearChange(event){

        setcarYear(event.target.value);
    }

    function handleMakeChange(event){

        setcarMake(event.target.value);
    }

    function handleModelChange(event){

        setcarModel(event.target.value);
    }


    return(<div>
        <h2>List of Car Objects</h2>
        <ul>
            {cars.map((car, index) =>
                 <li key={index} onClick={() => handleRemoveCar(index)}>        {/* arrow function to prevent the function from being called right away */}
                    {car.year} {car.make} {car.model}
                 </li>)}
        </ul>

        <input type="Number" value={carYear} onChange={handleYearChange}/><br></br>
        <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make'/><br></br>
        <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model'/><br></br>
        <button onClick={handleAddCar}>Add Car</button>

    </div>)
}

export default UpdArrObjSt