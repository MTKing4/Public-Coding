// Digital Clock Program

function updateClock(){
    const now = new Date();
    let hours = now.getHours()                               // we made hours a variable instead of a constant because we will modify it below
    const meridiem = hours >= 12 ? "PM" : "AM"               // if hours is above 12 make it pm otherwise am
    hours = hours % 12 || 12;                                // hours % 12 takes the remainder as the correct clock, so 13 % 12 is 1 O'clock, but the hours 12 and 0 (12 am) will result in 0 for both because 12 % 12 = 0, so we use the or || which considers the value 0 as false, therfore uses the or statement and replaces 0s with 12s
    hours = hours = hours.toString().padStart(2, 0);         // toString.padStart(2, 0) is converting the text to string then padStart(2, 0) is add padding for the first 2 characters, pad them with 0
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);              // this will call a function repeatedly to update the clock