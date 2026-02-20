// Calculator Program

const display = document.getElementById("display")


function appendToDisplay(input){
    display.value += input          // display.value gets the text from the display input element (textbox)
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
    display.value = eval(display.value);          // built-in JavaScript function, it takes a String value that contains valid JavaScript code. Evaluates JavaScript code and executes it. USE WITH CAUTION, eval is a major security risk to use because it can execute any code injected inside it
    }

    catch{
        display.value = "Error";
    }
}