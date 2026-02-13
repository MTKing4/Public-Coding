// Stopwatch Program

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start(){
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);            // setInterval() method in JavaScript returns a unique positive integer, known as the interval ID. This ID is a numeric value used specifically to control or stop the repeated execution of the function using the clearInterval() method. 
        isRunning = true;                           // Interestingly, setInterval() and setTimeout() share the same pool of IDs, and clearInterval() and clearTimeout() can technically be used interchangeably (though it's best practice to match them for code clarity). 
    }
}

function stop(){

    if(isRunning){
        clearInterval(timer);
        // elapsedTime = Date.now() - startTime   / i'm not sure i need this, don't know why he put it there :\
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));              // 1000 milliseconds * 60 seconds * 60 minutes, floor it to get rid of decimals
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);            // 1000 milliseconds * 60 seconds modulus 60 because when minutes reach 60 we want it to reset to 0
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);             // milliseconds is 4 digits so we divide by 10 to get 2 digits

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}