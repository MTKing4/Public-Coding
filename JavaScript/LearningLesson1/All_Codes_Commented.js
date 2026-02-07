// @ts-nocheck      //To disable all TypeScript checking for a specific file (i.e. Linting), add the comment // @ts-nocheck at the very top of that file.

// printing into the console
console.log('hello')           // this is a statement, can use any of ' " ` for strings, ` is best for formatted strings (strings + variabeles)

// diplay an alert popup
alert('alert')
window.alert('what')        //does the same as the line above

// in cmd you can execute js code with node.js runtime environment (used to enable javascript backend code)
// node index.js   //this will execute the file from cmd

/*
    multi
    line
    comment
*/

element = document.getElementById('myP')                // Accessing an element by id
console.log(element)

document.getElementById('myP').textContent = 'Hello'    // Accessing an element by id then change it

// CSS file-----------------

// body{
//     font-family: Verdana;
//     font-size: 2em;
// }


//-------------------------------------------------------------------------------------------------------------


// variables

var name = 'Mosh';    // var is older way of declaring a variable, having = makes it initialized (with a value)
let age;              // let is the newer and more preferred, output: undefined
age = 23              // assigning an already declared variable

let firstName;              // javascript variable naming convention: Camel Notation
let middleName, lastNamel;    // can declare multiple variables in one let 

console.log(y);

let age = 25;
console.log(`you are ${age} years old`)      // this is a template literal (formattd string) ${variable} only works with `


//-------------------------------------------------------------------------------------------------------------


// Constants

const INTEREST_RATE = 0.3;   // declaring a constant
INTEREST_RATE = 1;           // this will cause an error because you can't reassign constants
console.log(INTEREST_RATE)

// Note: constant Strings don't follow the all caps convention


//-------------------------------------------------------------------------------------------------------------


// Primitive/Value variable Types:

String
Number
Boolean
undefined
null

let name = 'Mosh';          // string Literal
let age = 30;               // Number Literal
let isApproved = true;      // Boolean Literal
let firstName;              // undefined
let lastName = undefined;   // undefined
let middleName = null;      // null, type: Object

typeof name                 // typeof is used to return the tpe of the variable

// Note: there's no float data type, all numbers are Number


//-------------------------------------------------------------------------------------------------------------


// Reference Types

Object
Array
Function


// Key Value Pairs

let person = {                          // object literal
    name: 'Mosh',
    age: 30
};

console.log(person)

// two ways to access the properties of a key value pair

// 1. Dot. Notation

console.log(person.name)

person.age = 20 // can also change it

// 2. Bracket Notation

person[name] = 'Potato'

console.log(person[name])


//-------------------------------------------------------------------------------------------------------------


// Arrays

// Arrays are also objects

let selectedColors = ['red', 'blue'];
selectedColors[2] = '2';        // adding an element to the list (or replace whatever is on that index), can be any type
console.log(selectedColors[0])      // access an element by index

// can also be accessed using dot notation

console.log(selectedColors.length)          // returns the length of the array


//-------------------------------------------------------------------------------------------------------------


// Functions


// a function Performing a task
function greet(name, lastName) {                            // function declaration, {} is the body of the function, name is a parameter
    console.log('hello ' + name + ' ' + lastName);          // 'hello' + name is concatinating a string with a variable
}


greet('mohammad', 'tareq');                // calling the function, mohammad is an argument
greet('mosh');                             // the second argument will be undefined because we didn't add it


// a function Calculating a value

function square(number) {
    return number * number;
}

console.log(square(3));

//-------------------------------------------------------------------------------------------------------------


// arithmetic operators
    // operands (values, variables, etc)
    // operators ( + - * / )

let x = 4;
let y = 2;
result = x + y;
result = x - y;
result = x * y;
result = x / y;
result = x ** y;         // power
result = x % y;          // modulus operator

// augmented assignment operator
student += 1;        // equals student = student + 1, works with all other operators

// increment operator
student++               // adds only 1
student--               // subtract only 1

// Operator precedence (same as math)

console.log(result)


//-------------------------------------------------------------------------------------------------------------


// Accepting user input

// Two ways
// 1. windows prompt
// 2. html textbox

//1. windows prompt

let username;

username = window.prompt('What is your username?');         //prompt window will show up in browser taking input

console.log(username)


// 2. html textbox

let username;

document.getElementById('submit').onclick = function(){             // on click of this button we'll call this function
    username = document.getElementById('textbox').value;            // .value to get the value entered, without it we'll get the entire input tag
    document.getElementById('welcome').textContent = `Hello ${username}`;
}

// HTML File----------------------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">                 <!--- linking the style file here, rel is a relationship attribute, describing the type of the file we're linking, in this case it's a stylesheet-->
// </head>
// <body>
//     <h1 id="welcome">Welcome</h1>
//     <label>username</label>
//     <input id="textbox"><br><br>
//     <button id="submit">submit</button>
//     <script src="index.js"></script>
// </body>
// </html>


//-------------------------------------------------------------------------------------------------------------


// type conversion

let age = window.prompt("How old are you? ");
age = Number(age);           // converting a string to a number
age += 1;

console.log(age, typeof age)

let x = "mohammad";
let y = "mohammad";
let z = "mohammad";

x = Number(x);              // converting a value to a number, string to Number will return NaN (not a number) but the type will be a number, unassigned variables will return NaN
y = String(y);              // converting a value to a string, unassigned variables will return undefined
z = Boolean(z);             // converting a value to a boolean (any value that's not empty will return true, "" will return false)


//-------------------------------------------------------------------------------------------------------------


// CSS Notes
// CSS Selector Types


// 1. Selects all elements

// * {
//   margin: 0;
// }


// 2. Element Selector

// p { color: red; }
// div { padding: 10px; }

// select only <p> elements with class="center" will be red and center-aligned: 
// p.center {
//   text-align: center;
//   color: red;
// }


// 3. Class Selector

// .box { border: 1px solid black; }


// 4. ID Selector

// #header { background: blue; }

// 5. Attribute Selectors

    // 1) Has attribute
        // input[required]

    // 2) Exact value
        // input[type="text"]

    // 3) Contains word
        // div[class~="box"]
    
    // 4) Starts with
        // a[href^="https"]
    
    // 5) Ends with
        // img[src$=".png"]
    
    // 6) Contains substring
        // a[href*="google"]


// 6. Grouping Selector
    // Apply same style to multiple selectors

// h1, h2, h3 {
//   font-family: Arial;
// }


// 7 Descendant Selector
    // Selects any child at any level

// div p {
//   color: green;
// }


// 8. Child Selector
    // Selects direct children only

// ul > li {
//   list-style: none;
// }

// 9. Adjacent Sibling Selector
    // Selects the immediately next sibling

// h1 + p {
//   margin-top: 0;
// }

// 10. General Sibling Selector
    // Selects all following siblings

// h1 ~ p {
//   color: gray;
// }

// 11. Pseudo-classes
    // Select elements based on state or position


    // Common ones:
        // :hover
        // :active
        // :focus
        // :visited
        // :checked
        // :disabled
        // :enabled

    // Structural:
        // :first-child
        // :last-child
        // :nth-child(2)
        // :nth-child(even)
        // :nth-of-type(3)
        // :only-child

    // Logic:
        // :not(.active)


// 12. Pseudo-elements
    // Select parts of elements
        // ::before
        // ::after
        // ::first-letter
        // ::first-line
        // ::selection
    
// e.x    

// p::first-letter {
// font-size: 2em;
// }


// 13. Combinators (Summary)

// Symbol   |   Meaning
//------------------------
// "space"  |   Descendant
//  >       |   Child
//  +       |   Adjacent sibling
//  ~       |   General sibling


// 14. Compound Selectors
    // Multiple selectors combined

// div.box#main[data-type="card"]


// 15. :is(), :where(), :has() (Modern CSS)

    // :is()
        // :is(h1, h2, h3) {
        //   color: red;
        // }

    // :where() (no specificity)
        // :where(section, article) {
        // margin: 20px;
        // }

    // :has() (parent selector!)
        // div:has(img) {
        // border: 2px solid red;
        // }


// 16. Namespace Selectors (Rare)
    // Used mainly in SVG/XML

// svg|circle


//-------------------------------------------------------------------------------------------------------------


// Count Program

const  decreaseBtn = document.getElementById('decreaseBtn');
const  resetBtn = document.getElementById('resetBtn');
const  increaseBtn = document.getElementById('increaseBtn');
const  countLabel = document.getElementById('countLabel');

let count = 0;

increaseBtn.onclick = function(){           // on click of the button execute this function
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}

// html file-----------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <label id="countLabel">0</label><br>
//     <div id="btnContainer">
//         <button id ="decreaseBtn" class="button">decrease</button>
//         <button id ="resetBtn" class="button">reset</button>
//         <button id ="increaseBtn" class="button">increase</button>
//     </div>
//     <script src="index.js"></script>
// </body>
// </html>

// css file-----------------------------------------------

// #countLabel{
//     display: block;
//     text-align: center;
//     font-size: 10em;
//     font-family: helvetica;

// }

// #btnContainer{
//     text-align: center;
// }

// .button{
//     padding: 10px 20px;
//     font-size: 1.5em;
//     color: white;
//     background-color: hsl(240, 41%, 47%);
//     border-radius: 5px;                     /* round edges */
//     cursor: pointer;                        /* makes the cursor icon into a pointer */     
//     transition: background-color 0.25s;     /* transition animation */
// }

// .button:hover{               /* applying the hover pseudo class over the buttons class (do something to button when hovered over) */
//     background-color: rgb(88, 4, 192);
// }


//-------------------------------------------------------------------------------------------------------------


// Math methods (math is built it js object that provides a collection of properties and methods)

let x = 3;
let y = 2;
let z;

console.log(Math.PI);       // PI
console.log(Math.E);        // e in math
z = Math.round(x);               // rounding a number
z = Math.floor(x);               // always rounds down
z = Math.ceil(x);                // always rounds up
z = Math.trunc(x)                // truncate the decimal numbers
z = Math.pow(2, 3)               // raise a base to a power
z = Math.sqrt(81)                // square root
z = Math.log(10)                 // natural logarithm
z = Math.sin(45)
z = Math.cos(45)
z = Math.tan(45)
z = Math.abs(-45)               // absolute number regardless of sign
z = Math.sign(-45)              // returns the sign of the number
z = Math.sin(45)

let max = Math.max(x, y, z)     // find the maximum
let min = Math.min(x, y, z)     // find the maximum

console.log(min)


//-------------------------------------------------------------------------------------------------------------


// Random number generator


let randNum = Math.random();                      // random number between 0 and 1

randNum = Math.floor(Math.random() * 6) + 1;      // random number between 1 and 6, + 1 was to make it from 1 to 6 instead of 0 to 6
randNum = Math.floor(Math.random() * 50) + 50;    // random number between 50 and 100

// other way of doing random between two numbers (it's the same actually)

let minNumb = 50;
let maxNumb = 100

randNum = Math.floor(Math.random() * (maxNumb - minNumb)) + minNumb; 

console.log(randNum)


//-------------------------------------------------------------------------------------------------------------


// Random Example


const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;

let radomNum;

myButton.onclick = function(){
    randNum = Math.floor(Math.random() * max) + min;
    myLabel.textContent = randNum;
}


// html file-----------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <button id="myButton">roll</button>
//     <label id="myLabel"></label><br>
//     <script src="index.js"></script>
// </body>
// </html>


// css file-----------------------------------------------

// body{
//     font-family: Verdana;
//     text-align: center;
// }

// #myButton{
//     font-size: 3em;
//     padding: 5px 25px;
//     border-radius: 5px;
// }

// #myLabel{
//     font-size: 3em;
// }


//-------------------------------------------------------------------------------------------------------------


// .checked property: determines the checked state of an HTML checkbox or radio button

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){             // .checked will check if the checkbox is checked
        subResult.textContent = "you are subbed";
    }
    else{
        subResult.textContent = "you are NOT subbed";
    }
}   // the same for the radio buttons


// html file-----------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <input type="checkbox" id="myCheckBox">
//     <label for="myCheckBox">Subscribe</label><br>       <!-- for will make clicking on the label it will count as clicking on the checkbox-->
//     <br>

//     <input type="radio" id="visaBtn" name="card">
//     <label for="visaBtn">Visa</label><br>

//     <input type="radio" id="masterCardBtn" name="card">
//     <label for="masterCardBtn">MasterCard</label><br>

//     <input type="radio" id="payPalBtn" name="card">
//     <label for="payPalBtn">PayPal</label><br>
    
//     <br>
//     <button type="submit" id="mySubmit">Submit</button>

//     <p id="subResult"></p>
//     <p id="paymentResult"></p>
//     <script src="index.js"></script>
// </body>
// </html>


// css file-----------------------------------------------


// body{
//     font-family: Verdana;
//     font-size: 1.5em;
// }

// #mySubmit{
//     font-size: 1.5em;
// }


//-------------------------------------------------------------------------------------------------------------


// Ternary Operator: a shortcut to if{} and else{} statemensts
//                   helps to assign a variable based on a condition
//                   syntax: condition ? codeIfTrue : codeifFalse;\

let age = 1;

let message = age >= 18 ? "You're an adult" : "You're a child";

console.log(message);


//-------------------------------------------------------------------------------------------------------------


// Switches: efficient replacement to many if else statements

let day = 1;

switch(day){
    case 1:             // means day = 1
        console.log("it's sunday")
        break;          // break is used to break out of the swtich once we have a matching case, otherwise all cases will execute after the case that is matched
    case 2:
        console.log("it's monday")
        break;
        //etc
        // if there are no matchiing values, we exit the switch
        default:                // default case when there are no matches
            console.log("No matching cases")
}   


//-------------------------------------------------------------------------------------------------------------


// string methods: allows you to manipulate and work with text (strings)

let userName = "BroCode";

char = userName.charAt(0);               // prints the character at that index number
char = userName.indexOf("B");            // returns the index of the firts occurrence of a character
char = userName.lastIndexOf("o");        // returns the last occurence of a character
char = userName.length;                  // this isn't a method (hence no parenthesis) but it's similar
char = userName.trim();                  // remove white space before and after
char = userName.toUpperCase();           // make all characters upper case
char = userName.toLowerCase();           // make all characters lower case
char = userName.repeat(3);               // repeate the string a nunmber of times
char = userName.startsWith("B");         // returns true or false if the string starts with the given character
char = userName.endsWith("e");           // returns true or false if the string ends with the given character
char = userName.includes("r");           // if the string contains the character, returns true/false
char = userName.replaceAll("o", "e");    // replace all occurences of a character with another character
char = userName.padStart(11, "+964")              // padstart(11, "+964") means pad this string with +964 until the length is 11
char = userName.padEnd(15, "potato")

console.log(char);


//-------------------------------------------------------------------------------------------------------------


// string slicing: creating a substring
//                 from a portion of another string
//                 syntax: string.slice(start index, end index)
//                 end index is not included in the slice


const fullName = "Bro Code";

let firstName = fullName.slice(0,3);
let lastName = fullName.slice(4);       // no need to specify the ending index since it will add all characters till the end anyway


let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);     // -1 goes backwards from the end: returns the last index
lastChar = fullName.slice(-2);         // -2 will bring last two characters and so on

console.log(lastChar)


// dynamic slicing

const fullName = "Broseph Code";

let firstName = fullName.slice(0, fullName.indexOf(" "));

let lastName = fullName.slice(fullName.indexOf(" ") + 1);       // +1 to not include the space between the two words

console.log(lastName)


//-------------------------------------------------------------------------------------------------------------


// method chaining = calling one method after another
//                   in one continous line of code

// no method chaining

let username = window.prompt("enter your username")


username = username.trim().charAt(0).toUpperCase()  // trim spaces at start, take the first letter and make it uppercase
         + username.trim().slice(1).toLowerCase()   // take every letter but the first one and make them lowercase



console.log(username)


//-------------------------------------------------------------------------------------------------------------


// logical operators = used to combine and manipulate boolean values

//      AND = &&
//      OR = ||
//      NOT = !


//-------------------------------------------------------------------------------------------------------------


// strict equality operator ===

// = assignement operator
// == comparison operator (compare if values are equal, doesn't care about the datatype)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator


// ex with ==

const PI = 3.14;

if(PI == "3.14"){       // i have no idea why that works, that's insane
    console.log("that is Pi");
}
else {
    console.log("NOT")
}


// ex with ===

const PI = 3.14;

if(PI === "3.14"){
    console.log("that is Pi");
}
else {
    console.log("NOT")
}

// IMPORTANT NOTE
// in == the null and undefined are equals, this is the only exception where two different values are equals
// but in === they are not

null == undefined      // true
null === undefined     // false


//-------------------------------------------------------------------------------------------------------------


// while loop = repeat some code while some condition is true


let username = "";

while(username === "" || username === null){
    username = window.prompt("enter your username")
}

console.log(`welcome ${username}`)


// do while loop = same, only difference is that the code after do will get executed at least once before checking the while condition

let username; // do will work even when username is undefined because it will always execute once, afterwards, window.prompt will return "" if pressed ok without entering anything, or null if pressed cancel (i.e. match the while condition and repeats)

do{
    username = window.prompt("enter your username")
}
while(username === "" || username === null)

console.log(`welcome ${username}`)


//-------------------------------------------------------------------------------------------------------------


// for loops = repeat some code a limited amount of times

for(let x = 10; x != 0; x--){
    console.log(`love you ${x} amount of times`)
}

for(let x = 0; x != 10; x+=2){
    console.log(`love you ${x} amount of times`)
}


// break and continue

for(let i = 1; i <= 20; i++){

    if(i == 13){
        continue;       //skip this iteration, and break will exit the loop
    }
    console.log(i)
}


//-------------------------------------------------------------------------------------------------------------


// functions = a section of reusable code.
//             Declare the code once, use it multiple times.
//             Call the functions to execute that code.


function happyBirthday(username, age){      //parameters
    console.log(`Happy birthday, dear ${username}, you're ${age} years old`);
}

happyBirthday("mohammad", "51");        // arugments


// return keyword

function add (x, y){
    let result = x + y
    return result
}

let answer = add(2, 3)
console.log(answer)


//-------------------------------------------------------------------------------------------------------------


// variable scope = where a variable is recognized
//                  and accessable (local vs global)

//-------------------------------------------------------------------------------------------------------------

// .toFixed() method
// will fix the number of float points to a number of your choice

let number = 12.45;
console.log(number.toFixed(1))


//-------------------------------------------------------------------------------------------------------------


// Array Methods

let selectedColors = ['red', 'blue', 'green'];

selectedColors.length;                  // returns the length of the array (is a property not a method, needs printing to be shown)
selectedColors.push("potato")           // add an element to the end
selectedColors.pop()                    // remove the last element
selectedColors.unshift("stinger")       // add an element to the begining
selectedColors.shift("stinger")         // remove an element from the begining
index = selectedColors.indexOf("red")   // shows the index of the element in the list, -1 if it doesn't exist
selectedColors.sort();                  // sorts elements in alphabetical order
selectedColors.sort().reverse();           // sorts elements in reverse alphabetical order

console.log(selectedColors);
console.log(index);


// looping through the elements and display them with for loop


for(index = 0; index < selectedColors.length; index++){
    console.log(selectedColors[index])
}


// looping in reverse

for(index = selectedColors.length -1 ; index >= 0; index--){
    console.log(selectedColors[index])
}


// Enhanced for loop (shortuct to display elements of an array)

for(let color of selectedColors){
    console.log(color)
}


//-------------------------------------------------------------------------------------------------------------


// spread operator = ... allows an iterable such as an array
//                   or string to be expanded into separate
//                   elements (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Math.max(...numbers);            // Math.max() doesn't take an array directly, so we have to use a spread operator ... with it

console.log(maximum);


// spread operator with strings

let username = "mohammad";
let letters = [...username]
letters = [...username].join("-")           // .join() will join the elements of the list back together, adding (-) between each element
console.log(letters)


// creating a shallow copy of an array (meaning different data structure, but identical values)

let fruits = ["apple", "orange", "banana"];
let newfruits = [...fruits];

console.log(newfruits);


// combining two or more arrays using spread operator ...

let vegetables = ["potato", "tomoato", "jotato"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];     // combining the arrays + appending extra elements

console.log(foods);


//-------------------------------------------------------------------------------------------------------------


// rest paramaters = (...rest) allow a function to work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles seperate elements into an array

function openFridge(...foods){                      // ...food() is a rest paramter, will accept any number of arguments and store them in the foods array
    console.log(...foods);               // ...foods() here is a spread operator (not needed but to print them as seperate elements instead of an array)
}

function getFood(...foods){
    return foods
}

const food1 = "pizza";
const food2 = "burger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "finger";

openFridge(food1, food2, food3, food4, food5);      // can pass any number of arguments to the function because it has a rest paramater assigned to it

const foods = getFood(food1, food2, food3, food4, food5)  // will save foods as an array

console.log(foods);


//-------------------------------------------------------------------------------------------------------------


// time delays


hello();
goodbye();

function hello(){
    setTimeout(             // set an execution delay (goodbye will run first)
        function()
        {
            console.log("Hello");
        }
    , 3000);
}

function goodbye(){
    console.log("goodbye");
}


//-------------------------------------------------------------------------------------------------------------


// callback = a function that is passed as an argument to another function
//  used to handle asynchronous  operations:
//  1. reading a file
//  2. network requests
//  3. interacting with databases

hello(goodbye);

function hello(callback){
    console.log("Hello");
    callback();
}

function goodbye(){
    console.log("goodbye");
}


//-------------------------------------------------------------------------------------------------------------


// .forEach() =  method used to iterate over the elemenets
//              of an array and apply a specified function (callback)
//              to each element

// Syntax:      array.forEach(callback)
//              element, index, array are names that are predefined by forEach method, 
//              element is the element, index is the index of the element, array refers to the array we're applying forEach at

let numbers = [1, 2, 3, 4, 5];

function display(element){      // element argument here is predefined in the forEach() method
    console.log(element);
}

numbers.forEach(display);       // this will display each element in the array



// will iterate through all the elements and double them one by one
function double(element, index, array){
    array[index] = element * 2

}

numbers.forEach(double);       // this will display each element in the array
numbers.forEach(display);


//-------------------------------------------------------------------------------------------------------------


// .map() = accepts a callback and applies that function
//         to each element of an array, then return a new array


const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);        // returns a new array, the only difference with forEach, where it modifies the original array

console.log(squares)

function square(element){
    return Math.pow(element, 2)
}


// Example 2:

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"]
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}


//-------------------------------------------------------------------------------------------------------------


// .filter() = creates a new array by filtering out elements

let numbers = [1, 2, 4, 5, 6, 7];
let evenNums = numbers.filter(isEeven)

console.log(evenNums)

function isEeven(element){
    return element % 2 === 0;       // the elements that will return true will be included in the new array and false will be filtered out
}

//-------------------------------------------------------------------------------------------------------------


// .reduce() = reduce the elements of an array to a single value


const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);


console.log(`$${total.toFixed(2)}`)     // toFixed(2) was only to add two decimal places

function sum(accumulator, element){     // accumulator is the total that element will keep getting added to 
    return accumulator + element;
}

//-------------------------------------------------------------------------------------------------------------


// function expressions

// function declaration = define a reusable block of code that performs a specific task

function hello(){
    console.log("Hello");
}

// function expression = a way to define functions as values or variables

const hello = function(){       //function expression as a variable
    console.log("Hello");
}

hello();     // we call the function expression by its variable



setTimeout(function(){console.log("Hello")}, 3000); // you can pass an entire function as an argument


//-------------------------------------------------------------------------------------------------------------


// Arrow Functions

// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => Code

const hello = (name) => console.log(`Hello ${name}`);       // before the arrow => are the parameters we can type () if we don't have any paramaters to pass


const hello2 = (name, age) => {console.log(`Hello ${name}`)       // can have multiple line statements by adding {}
                        console.log(`You are ${age} Years old`)};
hello("Man");
hello2("Dude", 25);


// Arrow function with setTimeout

setTimeout( () => console.log("Hello"), 3000);


// Arrow Function with map, filter, reduce

// map

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((Element) => Math.pow(Element, 2));

console.log(squares);


// filter

// finding even and odd numbers
const evenNums = numbers.filter((Element) => Element % 2 === 0);
const oddNums = numbers.filter((Element) => Element % 2 !== 0);

console.log(evenNums)
console.log(oddNums)


// reduce

const total = numbers.reduce((accumulator, element) => accumulator + element)

console.log(total)

//-------------------------------------------------------------------------------------------------------------


// objects

// object = A collection of related properties and/or methods (very similar to classes or structs)
//          Can represent real world objects (people, products, places)
//          object = {key:value, function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function(){console.log("Hey")},
}

console.log(person1.firstName)
console.log(person1.lastName)
person1.sayHello()

console.log(person2.firstName)
console.log(person2.lastName)
person2.sayHello()


//-------------------------------------------------------------------------------------------------------------


// this.

// this = reference to the object where this. is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}


person1.sayHello();
person1.eat();


// using this with console.log will return the Window object (it's the object that's responsible for showing the empty web window)
console.log(this)

// NOTE: you can't use this. with arrow functions because with arrow functions this. will be pointing to the Window object


//-------------------------------------------------------------------------------------------------------------


// Constructors

// constructor = special method for defining the properties
//               and methods of objects, it's good to make many objects 
//               instead of defining them individually

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`you drive the ${this.model}.`)}
}

const car1 = new Car('Toyota', 'Hilux', '2024', 'Black');
const car2 = new Car('Nissan', 'Yaris', '2015', 'Pink');


console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
console.log(car1)
console.log(car2)
car1.drive()
car2.drive()


//-------------------------------------------------------------------------------------------------------------


// Classes

// Class = (ES6 feature) provides a more structured and cleaner way
//         to work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

// ES6 (ECMAScript 2015) is a major, modern update to the JavaScript language, released in 2015

class Products{
    constructor(name, price){
        this.name = name;
        this.price = price.toFixed(2);          // can apply methods directly in the constructor (just saying)
    }

    displayProduct(){                           // a method declaration
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }
}

const product1 = new Products("Potato Chips", 2.99)
const product2 = new Products("Pepsi", 1,99)

console.log(product1.name)
console.log(product1.price)
product1.displayProduct()
product2.displayProduct()


//-------------------------------------------------------------------------------------------------------------


// static

// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created from
//          that class (class owns anything static, not the objects)


class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
}

console.log(MathUtil.PI);       // no need to create an object to use this property
console.log(MathUtil.getDiameter(10));


// ex.2

class User{

    static userCount = 0;

    constructor(userName){
        this.userName = userName;
        User.userCount++
    }
}

const user1 = new User("Spongebob");
const user2 = new User("3amobaba");

console.log(user1.userName);
console.log(User.userCount);


//-------------------------------------------------------------------------------------------------------------


// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code reusability

class Animal{
    alive = true;               // this is not static, just the classic way of creating an attribute for the objects only difference is that it's without a constructor

    eat(){
        console.log(`This ${this.name} is eating`);         // name is defined in the child classes therefore it's possible to refrence them in the parent class after the objects were created.
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit";
    
    run(){          // this is a rabbit specific method
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish";
}


const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive)
rabbit.eat();
rabbit.sleep();
rabbit.run();


//-------------------------------------------------------------------------------------------------------------


// super = super keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal {
    constructor(name, age){          // super constructor, will have properties that are available to all children constructors
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at ${speed} mph`);      // speed here is just a paramenter, we will chose to pass different arguments depnding on the child's class speed properties
    }
}


class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);                        // have to call the super class's constructor in order to make children constructors, and also to get the super constructor's properties
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)              // accessing the parent method and passing this child's class runSpeed property
    }
}


class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}


class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }

}


const rabbit = new Rabbit("rabbit", 1, 25)
const fish = new Fish("fish", 2, 12)
const hawk = new Hawk("hawk", 3, 50)


console.log(rabbit.name);
console.log(fish.name);
console.log(rabbit.runSpeed);


rabbit.run();
fish.swim();
hawk.fly();


//-------------------------------------------------------------------------------------------------------------


// getters and setters

// getters = special method that makes a property readable
// setters = special method that makes a property writable

// used validate and modify a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){                    //setter, writable but not readable
        if(newWidth > 0){                   // validating if it's above zero
            this._width = newWidth;         // using underscore _ in _width tells other developers that this is a private property
        }
        else{
            console.error("width must be a positive number");       // .error to show an error message
        }
    }

    set height(newHeight){           
        if(newHeight > 0){           
            this._height = newHeight;
        }
        else{
            console.error("height must be a positive number");
        }
    }


    get width(){
        return this._width;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;     // can add addtional logic when returning a value
    }

    get area(){             // with get we can access a property thatv doesn't exist in the class definition or consstructor
        return this._width * this._height;
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


//-------------------------------------------------------------------------------------------------------------


// destructuring

// destructuring = extract values from arrays and objects, then assign them to variables
//                 in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring


// Example 1
// swap the value of two variables

let a = 1;
let b = 2;

[a, b] = [b, a];     // on the left side we're using destructuring, on the right side we're creating an array

console.log(a);
console.log(b);

//---------------------------------------------

// Example 2
// swap two elements within an array

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];


console.log(colors);

//---------------------------------------------

// Example 3
// assign array elements to variables

const colors = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;       // these valriables will take the first three elements of the array, we will use rest parameters to put the rest of the elements into an array ( see what i did there :) ) 

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//---------------------------------------------

// Example 4
// extract values from objects

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",          // i neeeded to increment the property names so that i can initialize them because otherwise i can't initialize the same variable names from object 1, i can't access them 
    lastName: "Star",
    age: 34
}

const {firstName, lastName, age, job} = person1;        // object destructuring, we're extracting these valeus from the first object, and we can print them using these variable names

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

const {firstName:firstName2, lastName:lastName2, age:age2, job:job2="Unemployed"} = person2;    // second object does not have a job property so we will assign it here, also i'm using aliasing here in firstName:firstName2 so that object 2 is stored in different variables, but when putting a different variable name you need to tell JS that this is an alias to the same property before the name change, it's essential to have a new variable name because you're declaring a new variable, if the variable name was not incremented it would conflict with a redeclaration error with object 1

console.log(firstName2);
console.log(lastName2);
console.log(age2);
console.log(job2);

//---------------------------------------------

// Example 5
// destructure in function parameters


function displayPerson({firstName, lastName, age, job="Unemployed"}){            // destructuring in function paramters (passing an object in a function then destructure it in the function), here job="Unemployed" is a default value, it will apply to object 2 because it doesn't have a job, but object 1 has a job so it doesn't use the default value and uses its own (amazing)
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}


const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Patrick",          // i neeeded to increment the property names so that i can initialize them because otherwise i can't initialize the same variable names from object 1, i can't access them 
    lastName: "Star",
    age: 34
}

displayPerson(person1);
displayPerson(person2);


//-------------------------------------------------------------------------------------------------------------


// Nested Objects

// nested objects = Objects inside of other objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Examples:
//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "Cooking"],
    address: {                                          //nested object
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "int. Waters"
    }
}

console.log(person.fullName)
console.log(person.age)
console.log(person.isStudent)
console.log(person.hobbies[0])              // using indexing to access specific object from that array
console.log(person.address.street)          // accessing properties of a nested object


for(const property in person.address){          //looping through the properties of a nested object
    console.log(person.address[property])       // here we using index of [] instead of . property assessor to access its properties
}

//---------------------------------------------

// Example 2

class Person{                               // parent object
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);         // creating an address object from the address class, and passing our address properties using the ...spread operator
    }
}

class Address{                              //child object
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                                            "Bikini Bottom",
                                            "Int. Waters");
                                        

const person2 = new Person("Patrick", 37, "128 Conch St.", 
                                            "Bikini Bottom",
                                            "Int. Waters");


const person3 = new Person("Squidwards", 45, "126 Conch St.", 
                                            "Bikini Bottom",
                                            "Int. Waters");


console.log(person1.name)
console.log(person1.age)
console.log(person1.address)
console.log(person3.address.street)


//-------------------------------------------------------------------------------------------------------------


// Array of objects

const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37}];


console.log(fruits[0].name);            // accessing the property of the objects in the array

fruits.push({name: "grapes", color: "purple", calories: 62});       // pushing, i.e. adding a new object to the array

fruits.pop();               // remove the last element from the array

fruits.splice(1, 2);        // remove an elenment at a certain indices, here we removed from index 1 to 2

console.log(fruits);

fruits.forEach(fruit => console.log(fruit.color));       // using forEach and arrow functions we can loop through the array and access the object properties

const fruitNames = fruits.map(fruit => fruit.name);         // using map with arrow functions we can access the properties and add them to an a new array

console.log(fruitNames);

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");     // using filter with arrow functions we can create a new array with only the objects that match the certain conditions, in this case if their color property was yellow

console.log(yellowFruits);

const maxFruit = fruits.reduce((max, nextFruit) => nextFruit.calories > max.calories ? nextFruit: max); // using reduce, arrow function, and Ternary operator to return the fruit with the maximum calories, checking if next fruit's calories is bigger than the maximum ? if so return the nextFruit, otherwise : return the maximum


console.log(maxFruit);