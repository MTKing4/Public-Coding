import React, { useState } from 'react'

function UpdArrSt(){

    const [ foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    
    function handleAddFood(){
        
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""             // resetting the text field only, has no other effect

        setFoods(prevFoods => [...prevFoods, newFood]);      // keep the list and add to it using ...spread operator
    }
    
    function handleRemoveFood(index){

        setFoods(foods.filter(( _, indexOfArray) => indexOfArray != index))               // using Array filter function to remove the element we want removed, this function expects an element and an index, we gave the index a different name to not conflict with the function index parameter, the element paramter is named _ by convention when it is not being used 
    }
    
    return(<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}>        {/* adding the remove function callback, but it needs an argument so we have to make an arrow function */}
                {food}</li> )}                                              {/* adding each food as a list item */}
        </ul>

        <input type="text" id="foodInput" placeholder='Enter food name' />
        <button onClick={handleAddFood}>Add Food</button>

    </div>)
}

export default UpdArrSt