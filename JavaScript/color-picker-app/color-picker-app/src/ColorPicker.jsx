import React, {useState} from 'react';

function ColorPicker(){

    const [color, setColor] = useState('#FFFFFF');

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(<div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>     {/* when embedding JavaScript then add css styling in an tag attribute, we need to add it as an object so we use double curly braces {{backgrounColor: color}} first braces to indicate it's javascript second braces to indicate it's sytling object */}  
            <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color</label><br></br>
            <input type='color' value ={color} onChange={handleColorChange}></input>
    </div>)
}

export default ColorPicker


// input type ='color' is a color picker input