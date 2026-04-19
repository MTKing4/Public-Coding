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


//-------------------------------------------------------------------------------------------------------------


// sort() method

// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

fruits.sort();                  //sorted the string
numbers.sort();                 // sorted the number as a string so it goes like 1, 10, 2 etc
numbers.sort((a, b) => a - b);       // this is a compare function, sort() takes each two adjacent numbers in the array, and decides which one should come first by the the sign of the number that is passed to it, if it's positive it swaps their order, if negative it keeps it as is, and if zero no change happens, to get the sign we simply subtract one from the other, if the first one (a) is larger, you get a positive number forcing a swap, if the first is smaller, the result is negative and no swap happens, therefore the array will be sorted numerically ascending, to do descending you flip the equation to b - a

console.log(fruits);
console.log(numbers);



// sorting objects by a given property (with compare function)


const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}
]


people.sort((a, b) => a.age - b.age);           // sorting age numerically

people.sort((a, b) => a.name.localeCompare(b.name));           // sorting name alphabetically, localeCompare() method compares two strings for lexicographic order
people.sort((a, b) => b.name.localeCompare(a.name));           // sorting name alphabeticall in reverse, just swap a and b

console.log(people)


//-------------------------------------------------------------------------------------------------------------


// shuffle an array

// using Fisher-Yates algorithm

// The Fisher-Yates algorithm works by:
// 1. Starting from the end
// 2. Swapping each element with a random element before it (or itself)
// 3. Moving backward

// At each step: 
// pick random index between 0 and i
// swap array[i] with array[random]


const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

shuffle(cards);

console.log(cards);


function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){                          // we have 13 elements, but we're doing 12 iterations with i > 0, why not use i >= 0? Because when i becomes 0, there's nothing left to shuffle. Only one element remains and A single element cannot be shuffled so No swap needed
        const random = Math.floor(Math.random() * (i + 1));             // i = 12 in the first iteration, so we need + 1 to get from the 13 possible outcomes with i+1 otherwise the 13th item at index 12 is unreachable.
        
            [array[i], array[random]] = [array[random], array[i]];      // using array destructuring two swap two items from the array

    }
}


//-------------------------------------------------------------------------------------------------------------

// Dates

// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

const date = new Date();            // returns the current live date

// possible arguments for Date(year, month, day, hour, minute, second, ms)

// const date = new Date(2024, 0, 1, 2, 3, 4, 5);          // month 0 means january
// const date = new Date("2024-01-02T12:00:00Z");            // T for time, Z for timezone (UTC)
// const date = new Date(1700000000000);                     // milliseconds since epoch started

const year = date.getFullYear();                             // get the year integer
const month = date.getMonth();                               // get the month integer january is 0, december is 1
const day = date.getDate();                                  // get the day integer
const dayOfWeek = date.getDay();                             // get the day of the week integer, sunday is 0, monday is 1
const hour = date.getHours();                                // get the hours integer, 24h system
const minutes = date.getMinutes();                           // get the minutes integer
const seconds = date.getSeconds();                           // get the seconds integer

console.log(year);
console.log(month);
console.log(day);
console.log(dayOfWeek);
console.log(hour);
console.log(minutes);
console.log(seconds);


// setting the datetime

date.setFullYear(2024);                                     // set the year to what you want
date.setMonth(0);                                           // set the month to what you want
date.setDate(1);                                            // set the day to what you want
date.setHours(1);                                           // set the hours to what you want
date.setMinutes(1);                                         // set the minutes to what you want
date.setSeconds(3);                                         // set the seconds to what you want

console.log(date)


// comparing the dates

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");


if (date2 > date1){
    console.log("Happy New Year!");
}


//-------------------------------------------------------------------------------------------------------------


// closures

// closure = A function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function.
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks: React, Vue, Angular



function outer(){

    let message = "Hello";          // this is considered a private variable

    function inner(){
          console.log(message);
    }


    inner();
}

message = "Goodbye";                // this won't update the message variable because it's unreachable i.e out of scope, this is creating a different variable in this scope

outer();


//---------------------------------------------

// Example 2

// incrementing a local (private) variable through a function call 

// Problem:
// ~~~~~~~~

function increment(){
    let count = 0
    count++;
    console.log(`count increased to ${count}`);
}


increment();
increment();
increment();
// calling this functions multiple times will not go past count = 1 because it resets to 0 every time it was called, so 
// we have to make the count variable public and put it outside the function, but then it will be unsecure
// so the state of that variable is maintained, but it's not pivate
// a closure maintains the state of a variable and makes it private


// solution
// ~~~~~~~~

// inclose the scope within another function

function createCounter(){

    let count = 0

    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    }

    return{increment:increment};                // returning an object, syntax: property:value, the value will be the name of the increment method
}


const counter = createCounter();                // now we're creating an object to call the createCounter() function, calling it only once, so count will be initialized at 0, and only once i.e. it will not reset like in the previous example


counter.increment();                            // now we're accessing the inner function and only executing that without the createCounter() function, so the count will not be reset to 0 in this case and the count will increase above 1
counter.increment();
counter.increment();

console.log(counter.count);                     // this will return undefined because count variable is not accessable outside of the function

counter.count = 0;                              // this is creating a new variable, it's not accessing the same count variable

console.log(counter.count);                     // now this is going to display the new variable we just defined, not the inner variable




// Adding a getCount function to return the count variable
// ~~~~~~~~

// inclose the scope within another function

function createCounter(){

    let count = 0

    function increment(){
        count++;
        console.log(`count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return{increment:increment, getCount:getCount};                // returning the count as well
}


const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`)


//---------------------------------------------

// Example 3


// score counter without closure
// ~~~~~~~~

let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
}


function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}


function getScore(){
    return score;
}


increaseScore(5);
decreaseScore(2);
console.log(`the final score ${getScore()}`);



// score counter with closure
// ~~~~~~~~

function createGame(){
    
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }


    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }


    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};            // can return them without an alias
}


const game = createGame();                                      // creating a game object to access inner functions(methods)

game.increaseScore(5);
game.decreaseScore(2);
console.log(`the final score ${game.getScore()}`);


//-------------------------------------------------------------------------------------------------------------


// setTimeout() function

// setTimeout() = function in JavaScript that allows you to schedule the execution
//                of a function after an amount of time (milliseconds)
//                times are approximate (varies based on the workload of the JavaScript runtime env.)

//                setTimeout(callback, delay);
//                use clearTimout(timeoutId) to cancel a timeout before it triggers, but we have to pass a timeoutId

function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 3000);


// using anonymous function
setTimeout(function(){window.alert("Hello")}, 3000);


// using arrow function
setTimeout(() => {window.alert("Hello")}, 3000);


//using clearTimout(timeoutId)
const timeoutId = setTimeout(() => {window.alert("Hello")}, 3000);        // assigning the funtion to a variable/constant, that will be the id

clearTimeout(timeoutId);


//-------------------------------------------------------------------------------------------------------------


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


// html file-----------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Digital Clock Program</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
    
//     <div id="clock-container">
//         <div id="clock">00:00:00</div>
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>


// css file-----------------------------------------------


// body{
//     background-image: url(background1.webp);
//     background-size: cover;                     /* makes the image cover the entire body/container */
//     background-repeat: no-repeat;               /* makes the image not repeat if it was too small (not needed here) */
//     background-attachment: fixed;               /* this makes the background position fixed when scrolling down */
//     margin: 0;   
// }

// #clock-container{
//     display: flex;                      /* use flexbox: (Flexible Box Layout) is a 1D CSS layout model designed for arranging items in rows or columns, making it easy to align, space, and resize elements within a container. It automatically distributes space, allowing items to grow or shrink to fit different screen, mainly, phones use column, and computers use rows */
//     justify-content: center;            /* makes the content in the center horizontally */
//     align-items: center;                /* alight itmes vertically */
//     height: 100vh;                      /* increasing the height of the container by 100 viewports */
//     border: 2px solid;                  /* adding a border stroke to the container so that we can see the border of the container*/
// }

// #clock{
//     font-family: monospace;
//     font-size: 6.5rem;
//     font-weight: bold;
//     text-align: center;
//     color: rgb(16, 17, 90);
//     backdrop-filter: blur(75px);                /* adding a blur background to the clock*/
//     background-color: hsl(0, 100%, 0.1);      /* adding fogginess to the width (not noticable for my image) */
//     width: 100%;                                /* increasing the width of the clock div*/
// }


//-------------------------------------------------------------------------------------------------------------


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

// html file-----------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Stopwatch</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
    
//     <h1 id="myH1">Stopwatch</h1>

//     <div id="container">
//         <div id="display">
//             00:00:00:00
//         </div>
//         <div id="controls">
//             <button id="startBtn" onclick="start()">Start</button>
//             <button id="stopBtn" onclick="stop()">Stop</button>
//             <button id="resetBtn" onclick="reset()">Reset</button>
//         </div>
//     </div>
//     <script src="index.js"></script>
// </body>
// </html>

// css file-----------------------------------------------

// body{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: hsl(180, 0%, 90%);
// }

// #myH1{
//     font-size: 4rem;
//     font-family: Arial, sans-serif;
//     color: hsl(0, 0%, 25%);
// }

// #container{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 30px;
//     border: 5px solid;
//     border-radius: 50px;                /* rounding the corners */
//     background-color: white;
// }

// #display{
//     font-size: 5rem;
//     font-family: monospace;
//     font-weight: bold;
//     color: hsl(0, 0%, 30%);
//     text-shadow: 2px 2px 2px hsl(0, 0%, 0.75);           /* 2 verical offset, 2 horizontal offset, 2 blur, shadow color */
//     margin-bottom: 25px;                                   /* adding some margin space below the div element */
// }

// #controls button{                           /* select all the button elements inside controls div, to select only 1 button, do #controls #buttonId instead */
//     font-size: 1.5rem;
//     font-weight: bold;
//     padding: 10px 20px;
//     margin: 5px;
//     min-width: 125;
//     border: none;
//     border-radius: 15px;                    /* will make the corners rounded */
//     cursor: pointer;
//     color: white;
//     transition: background-color 0.5s ease;     /* transitioning between hover color and normal color now will take 0.5 seconds transition animation; */
// }

// #startBtn{
//     background-color: green;
// }

// #startBtn:hover{            /* hover pseudo-class */
//     background-color: rgb(0, 97, 0);
// }

// #stopBtn{
//     background-color: red;
// }

// #stopBtn:hover{
//     background-color: rgb(163, 0, 0);
// }

// #resetBtn{
//     background-color: rgb(0, 119, 255);
// }

// #resetBtn:hover{
//     background-color: rgb(0, 87, 185);
// }


//-------------------------------------------------------------------------------------------------------------

// ES6 Modules

// ES6 Module = An External file that contains reuseable code that can be imported into other JavaScript files.
//              Write reuseable code for many different apps.
//              Can contain variabeles, classes, functions ... and more
//              introduced as part of ECMAScript 2015 update


// index.js file--------------------------------------------------

import {PI, getCircumference, getArea} from './mathUtil.js'


console.log(PI)

const Circumference = getCircumference(10);
const area = getArea(10);


console.log(Circumference)
console.log(area)


// mathUtil.js file-----------------------------------------------



export const PI = 3.14159


export function getCircumference(radius){
    return 2 * PI * radius;
}


export function getArea(radius){
    return PI * radius * radius;
}


// index.html file------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
//     <script type="module" src="index.js"></script>      <!-- add type="module" to treat the script file as a module-->
// </body>
// </html>


//-------------------------------------------------------------------------------------------------------------


// Asynchronous Code


// Synchronous = Executes line by line consecutievly in a sequential manner
//               Code that waits for an operation to complete.

// Asynchronous = ALlows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: callbacks, Promises, Async/Await

setTimeout(() => console.log("Task 1"), 3000)           // setTimeout() is an Asynchronous function, the rest of the code executes without waiting for it

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");


// handling an asynchronous code with callbacks (making it synchronous)


function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);    

}

function func2(){
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
}

func1(func2);


//-------------------------------------------------------------------------------------------------------------


// Error Handling

// Error = An Object that is created to represent a problem that occurs
//         Occur often with user input or when establishing a connection


// try {} = Encloses code that might potentially cause an error
// catch {} = Catch and handly any thrown Errors from try {}
// finally {} = (optional) Always executes. Used mostly for clean up
//              ex. close files, close connections, release resources


try{
console.log("Hello");

console.leg("bye");            // intentional mistake
}
catch(error){
    // console.log(error);     // can use console.log or console.error
    console.error(error);
}
finally{
    console.log("Always execute");
}

console.log("End");            // still reach the end, program not interrupted due to handling the error


// Example 2

try{
    const dividend = Number(window.prompt("Enter a Dividend: "));       // type casted as number so that we get NaN (not a number) value to catch in the if statement
    const divisor = Number(window.prompt("Enter a Divisor: "));

    if(divisor == 0){
        throw new Error("Can't divide by zero");                   // Error constructor to construct a new error object (throw an error)

    }

    if(isNaN(dividend) || isNaN(divisor)){          // isNaN(value) method is used to check if a value is not a number
        throw new Error("use numbers only");
    }

    const  result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("End");


//-------------------------------------------------------------------------------------------------------------


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


// styles.css file------------------------------------------------


// body{
//     margin: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//     background-color: hsl(0, 0%, 95%);
// }

// #calculator{
//     font-family: Arial, sans-serif;
//     background-color: hsl(0, 0%, 15%);
//     border-radius: 15px;
//     max-width: 500;         /* maximum width of the calculator div */
//     overflow: hidden;       /* if any elements overflow, hide them*/
// }

// #display{
//     width: 100%;
//     padding: 20px;
//     font-size: 5rem;
//     text-align: left;
//     border: none;
//     background-color: hsl(0, 0%, 20%);
//     color: white;
// }

// #keys{
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);       /* repeat() is a built-in css function, 4 here is 4 columns, to arrange the buttons evenly we used 1fr which stands for fractional unit, 1fr indicates that each column should take up an even ammount of space */
//     gap: 10px;                                  /* gap between the rows */
//     padding: 25px;
// }

// button{
//     width: 100px;
//     height: 100px;
//     border-radius: 50px;
//     border: none;
//     background-color: hsl(0, 0%, 30%);
//     color: white;
//     font-size: 3rem;
//     font-weight: bold;
//     cursor: pointer;
// }

// button:hover{
//     background-color: hsl(0, 0%, 40%);
// }

// button:active{              /* when clicking the button*/
//     background-color: hsl(0, 0%, 50%);
// }

// .operator-btn{
//     background-color: hsl(35, 100%, 55%);
// }

// .operator-btn:hover{
//     background-color: hsl(35, 100%, 65%);
// }

// .operator-btn:active{
//     background-color: hsl(35, 100%, 75%);
// }


// index.html file------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Calculator Program</title>
//     <link rel="stylesheet" href="styles.css">
// </head>
// <body>
    
//     <div id="calculator">
//         <input id="display" readonly>           <!-- added readonly attribute so no text can be entered into the text field-->
//         <div id="keys">
//             <button onclick="appendToDisplay('+')" class="operator-btn">+</button>
//             <button onclick="appendToDisplay('7')">7</button>
//             <button onclick="appendToDisplay('8')">8</button>
//             <button onclick="appendToDisplay('9')">9</button>
//             <button onclick="appendToDisplay('-')" class="operator-btn">-</button>
//             <button onclick="appendToDisplay('4')">4</button>
//             <button onclick="appendToDisplay('5')">5</button>
//             <button onclick="appendToDisplay('6')">6</button>
//             <button onclick="appendToDisplay('*')" class="operator-btn">*</button>
//             <button onclick="appendToDisplay('1')">1</button>
//             <button onclick="appendToDisplay('2')">2</button>
//             <button onclick="appendToDisplay('3')">3</button>
//             <button onclick="appendToDisplay('/')" class="operator-btn">/</button>
//             <button onclick="appendToDisplay('0')">0</button>
//             <button onclick="appendToDisplay('.')">.</button>
//             <button onclick="calculate('=')">=</button>
//             <button onclick="clearDisplay('=')" class="operator-btn">C</button>
//         </div>
//     </div>
//     <script src="index.js"></script>
// </body>
// </html>


//-------------------------------------------------------------------------------------------------------------

// The DOM

// DOM = Document Object Model
//       Object{} that represents the page you see in the web browser
//       and provides you with an api to interact with it.
//       web browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure and style of a web page.

console.log(document);                  // will display the html document
console.dir(document);                  // will display all the properties of this object


document.title = "peep"                 // access the title property of this object (it will change the page title)

document.body.style.backgroundColor = "hsl(0, 0%, 15%)";     // dynamically change the page's background color after the page loads without a css file

const username = "Moh Code";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username ===  "" ? "Guest" : username


// index.html file------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <h1 id="welcome-msg">Welcome </h1>
//     <script src="index.js"></script>
// </body>
// </html>


//-------------------------------------------------------------------------------------------------------------


// Element Selectors

// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)


document.getElementById();              // returns an Element or NULL
document.getElementsByClassName();      // returns an HTML Collection
document.getElementsByTagName();        // returns an HTML Collection
document.querySelector();               // returns an the first matching Element or NULL
document.querySelectorAll();            // returns a NodeList


// getElementById()
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";                             // css properties from the dom use camelCase naming convention
myHeading.style.textAlign = "center"

console.log(myHeading);


// getElementsByClassName()
const fruits = document.getElementsByClassName("fruits");

console.log(fruits);            // this returns an HTML Collection (similar to an array)

fruits[0].style.backgroundColor = "red";        // can access the elements with indexing
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "yellow";


for(let fruit of fruits){                   // iterating them with an enhanced for loop, note HTML collections don't support forEach() method
    fruit.style.backgroundColor = "yellow";
}

Array.from(fruits).forEach(fruit => {            // type casting the HTML collection as an array with .from() method then use the .forEach() method
    fruit.style.backgroundColor = "blue";
});                  


// getElementsByTagName()
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "yellow";
h4Elements[1].style.backgroundColor = "yellow";


for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "purple";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}


// querySelector()
const element = document.querySelector(".fruits");                    // to select the element by class name use . then the name of the class, or tag name

element.style.backgroundColor = "magenta";            // this will change the first matching element only


// querySelectorAll()

// NodeLists are similar to an HTML collection except it has built-in methods similar to arrays, however NodeLists are static, HTML Collections are live
// since NodeLists are static they do not update automatically in the DOM, but HTML Collection do

const foods = document.querySelectorAll(".fruits");

foods[1].style.backgroundColor = "khaki";

console.log(foods);

foods.forEach(food =>{
    food.style.backgroundColor = "teal"
});


// index.html file------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <h1 id="my-heading">Food R Us </h1>

//     <div class="fruits">Apple</div>
//     <div class="fruits">Orange</div>
//     <div class="fruits">Banana</div>

//     <h4>Root vegetables</h4>
//     <ul>
//         <li>Beets</li>
//         <li>Carrots</li>
//         <li>Potatoes</li>
//     </ul>

//     <h4>Non-Root vegetables</h4>
//     <ul>
//         <li>Broccoli</li>
//         <li>Celery</li>
//         <li>Onions</li>
//     </ul>

//     <script src="index.js"></script>
// </body>
// </html>



//-------------------------------------------------------------------------------------------------------------


// DOM Navigation

// DOM Navigatoin = The process of navigating through the strcuture
//                  of an HTML document using JavaScript.


// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .Children



//--------------- .firstElementChild -----------------

// Example 1
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;         // this will select the first child element from the fruits parent element
firstChild.style.backgroundColor = "yellow";


// Example 2
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;       // this will get the first child element from all ul elements
    firstChild.style.backgroundColor = "yellow";
});



//--------------- .lastElementChild -----------------

const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";


// index.html file------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <ul id="fruits">
//         <li>apple</li>
//         <li>orange</li>
//         <li>banana</li>
//     </ul>

//     <ul id="vegetables">
//         <li>carrots</li>
//         <li>onions</li>
//         <li>potatoes</li>
//     </ul>

//     <ul id="desserts">
//         <li>cake</li>
//         <li>pie</li>
//         <li>ice cream</li>
//     </ul>

//     <script src="index.js"></script>
// </body>
// </html>


//--------------- .nextElementSibling -----------------


const element = document.getElementById("apple");   // if we select the list itself and ask for the next sibling it will select the next list, because all lists/elements are children of the body element
const nextSibling = element.nextElementSibling;     // take the sibling of the element currently selected i.e. the element that comes after the current element, if we select the last element in the list, the next sibling will return nothing since there's no next sibling
nextSibling.style.backgroundColor = "yellow";


//--------------- .previousElementSibling -----------------


const element = document.getElementById("orange");
const previousSibling = element.previousElementSibling;         // selecting the previous element from the current selected element
previousSibling.style.backgroundColor = "yellow";


//--------------- .parentElement -----------------


const element = document.getElementById("apple");
const parent = element.parentElement;               // gets the parent element
parent.style.backgroundColor = "yellow";


//--------------- .Children -----------------


// get them with Array() type cast and forEach()
const element = document.getElementById("fruits");
const children = element.children;          // this will return an HTML collection, which doesn't have a forEach() method so we type cast it as Array() then method chain it with forEach() that contains an arrow function

Array.from(children).forEach(child => {
    child.style.backgroundColor = "yellow";
})


// get them with index numbers
const element = document.getElementById("fruits");
const children = element.children;

children[1].style.backgroundColor = "yellow";


// index.html file------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <ul id="fruits">
//         <li id="apple">apple</li>
//         <li id="orange">orange</li>
//         <li id="banana">banana</li>
//     </ul>

//     <ul id="vegetables">
//         <li id="carrots">carrots</li>
//         <li id="onions">onions</li>
//         <li id="potatoes">potatoes</li>
//     </ul>

//     <ul id="desserts">
//         <li id="cake">cake</li>
//         <li id="pie">pie</li>
//         <li id="ice cream">ice cream</li>
//     </ul>

//     <script src="index.js"></script>
// </body>
// </html>


//-------------------------------------------------------------------------------------------------------------


// Add and Change HTML from .js files

// Example - Adding an <h1> element

//--------------- STEP 1 Create the element -----------------

const newH1 = document.createElement("h1");

//--------------- STEP 2 Add attributes/properties -----------------

newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//--------------- STEP 3 append element to DOM -----------------

document.body.append(newH1);    // when appending an element to a parent it will be the last child

document.body.prepend(newH1);    // you could prepend it to be the first child

document.getElementById("box1").append(newH1);      // you can append it inside a div element or any element

const box2 = document.getElementById("box2");       // put the new element between box1 and box2 (selecting box2 and put new element before it)
document.body.insertBefore(newH1, box2)             // insert newH1 element before box2 using insertBefore() built-in method


// index.html file ------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div id="box1" class="box">
//         <p>Box1</p>
//     </div>

//     <div id="box2" class="box">
//         <p>Box2</p>
//     </div>

//     <div id="box3" class="box">
//         <p>Box3</p>
//     </div>

//     <div id="box4" class="box">
//         <p>Box4</p>
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>


//--------------- appending when the box elements don't have IDs -----------------

const boxes = document.querySelectorAll(".box");        // this will be a node list (we're selecting everything that has a box class)
document.body.insertBefore(newH1, boxes[1])             // we'll access the boxes with indexing

//--------------- remove HTML element -----------------

document.body.removeChild(newH1);

// if it was within a box element with an ID
document.getElementById("box1").removeChild(newH1);


// index.html file without IDs------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div class="box">
//         <p>Box1</p>
//     </div>

//     <div class="box">
//         <p>Box2</p>
//     </div>

//     <div class="box">
//         <p>Box3</p>
//     </div>

//     <div class="box">
//         <p>Box4</p>
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>

// style.css file ------------------------------------------------

// .box{
//     border: 3px solid;
//     width: 100%;
//     height: 125px;
// }


//---------------------------------------------

// Example 2

// Selecting items from a list that don't have IDs

const listItems = document.querySelectorAll("#fruits li");   // select the ID of fruits then select any list item descendants within this ID, this will return a node list that stores all the current list items
const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";
document.getElementById("fruits").insertBefore(newListItem, listItems[0]);
document.getElementById("fruits").removeChild(newListItem); // removes it


// index.html file ------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <ol id="fruits">
//         <li>apple</li>
//         <li>orange</li>
//         <li>banana</li>
//     </ol>

//     <script src="index.js"></script>
// </body>
// </html>


//-------------------------------------------------------------------------------------------------------------


// Mouse Events

// event listener = listen for specific events to create interactive web pages
//                  events: click, mouseover, mousout
//                  .addEventListener(event, callback);


// Example 1

// hovering and clicking

const myBox = document.getElementById("myBox");

function ChangeColor(event){        // event will be the event that was listened for from .addEventListener built-in method
    event.target.style.backgroundColor = "tomato";           // target is what we clicked on (the element)
    event.target.textContent = "OUCH! 🤕";
}

myBox.addEventListener("click", ChangeColor);       // a mouse click event, the function can be callback, anonymous, or arrow

myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";              // when the mouse moves over the element
    event.target.textContent = "Don't do it! 😲";
})

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen"          // when the mouse moves out of the element
    event.target.textContent = "Click Me 😀"
})


// index.html file ------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <div id="myBox">
//         Click Me 😀
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>

//---------------------------------------------

// Example 2

// using a button

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


function ChangeColor(event){        // event will be the event that was listened for from .addEventListener built-in method
    myBox.style.backgroundColor = "tomato";           // target is what we clicked on (the element)
    myBox.textContent = "OUCH! 🤕";
}

myButton.addEventListener("click", ChangeColor);       // a mouse click event, the function can be callback, anonymous, or arrow

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";              // when the mouse moves over the element
    myBox.textContent = "Don't do it! 😲";
})

myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen"          // when the mouse moves out of the element
    myBox.textContent = "Click Me 😀"
})


// index.html file ------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <div id="myBox">
//         Click Me 😀
//     </div>

//     <button id="myButton">Click Me</button>

//     <script src="index.js"></script>
// </body>
// </html>


// style.css file ------------------------------------------------

// #myBox{
//     background-color: lightgreen;
//     width: 300px;
//     height: 300px;
//     font-size: 4.5rem;
//     font-weight: bold;
//     display: flex;
//     align-items: center;
//     text-align: center;
// }

// #myButton{
//     font-size: 3rem;
// }

//-------------------------------------------------------------------------------------------------------------


// Key Events

// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup (i.e. pressing and releasing keys)
//                 document.addEventListener(event, callback);


document.addEventListener("keydown", event => {
    // console.log(event);             // this will print whatever key is pressed (useful to know what the key is called)
    console.log(`key down is: ${event.key}`);            // show only the key
});

document.addEventListener("keyup", event => {
    console.log(`key up is ${event.key}`);
});



// Example

document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
});


// Example 2 - Move the object

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    
    if(event.key.startsWith("Arrow")){

        event.preventDefault();     // prevent default scrolling when object is off screen

        switch(event.key){
            case "ArrowUp":
               y -= moveAmount;
               break;

            case "ArrowDown":
               y += moveAmount;
               break;
            
            case "ArrowLeft":
               x -= moveAmount;
               break;

            case "ArrowRight":
               x += moveAmount;
               break;
        }
        myBox.style.top = `${y}px`          // access the top property and make it equal to y ( this is what will apply the movement to the element)
        myBox.style.left = `${x}px`         // access the left property and make it equal to x
    }
});

document.addEventListener("keydown", event => {
    myBox.textContent = "😮";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
});


// index.html file ------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <div id="myBox">😀</div>

//     <script src="index.js"></script>
// </body>
// </html>


// style.css file ------------------------------------------------


// body{
//     margin: 0;
// }

// #myBox{
//     background-color: lightblue;
//     width: 200px;
//     height: 200px;
//     font-size: 7.5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
// }

//-------------------------------------------------------------------------------------------------------------


// Hide/Show HTML Elements

const myButton = document.getElementById("myButton");
const myImage = document.getElementById("myImage");


// using element.style.display

myButton.addEventListener("click", event => {

    if (myImage.style.display === "none")
    {
        myImage.style.display = "block";            // block will make the element show, because it's a block level element
        myButton.textContent = "Hide";
    }
    else{
        myImage.style.display = "none";             // none will hide the element
        myButton.textContent = "Show";
    }
    
});


// using element.style.visibility
// this will reserve the empty space of that element, the button won't take its space like the previous example

myButton.addEventListener("click", event => {

    if (myImage.style.visibility === "hidden")
    {
        myImage.style.visibility = "visible";            // block will make the element show, because it's a block level element
        myButton.textContent = "Hide";
    }
    else{
        myImage.style.visibility = "hidden";             // none will hide the element
        myButton.textContent = "Show";
    }
    
    
});


// index.html file ------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <img id="myImage" src="strawberry.jpg"><br>
    
//     <button id="myButton">Hide</button><br>

//     <script src="index.js"></script>
// </body>
// </html>


// style.css file ------------------------------------------------


// #myButton{
//     font-size: 2rem;
// }


//-------------------------------------------------------------------------------------------------------------

// NodeLists

// NodeList = Static collection of HTML elements which can be selected by (id, class, element)
//            Can be created by using querySelectorAll()
//            similar to an array, but no (map, filter, reduce) but have forEach
//            NodeList won't update to automatically reflect changes


let buttons = document.querySelectorAll(".myButtons");


// Add HTML/CSS properties to each button

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
});


// Add an event listener to each button

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });

});


// Add an element

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "myButtons";                  // classList is used for adding an element to a class
document.body.appendChild(newButton);               // adding the button to the DOM


console.log(buttons);           // even though we just added a new button to the DOM in the same class, the NodeList still showing only 4, because they're static and any changes done after its creation will not be added


// to add the new button to the NodeList: we do another querySelectorAll

buttons = document.querySelectorAll(".myButtons");

console.log(buttons);



// Remove an element when clicking on it

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");          // need to update the NodeList manually because removing the elements doesn't remove them from the NodeList automatically
        console.log(buttons);
    })
})


// index.html file ------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <button class="myButtons">Button 1</button><br>
//     <button class="myButtons">Button 2</button><br>
//     <button class="myButtons">Button 3</button><br>
//     <button class="myButtons">Button 4</button><br>

//     <script src="index.js"></script>
// </body>
// </html>


// style.css file ------------------------------------------------

// .myButtons{
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
//     background-color: hsl(205, 100%, 60%);
//     color: white;
// }


//-------------------------------------------------------------------------------------------------------------


// classLists

// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.


// add()
// remove()
// toggle() // remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

myButton.classList.add("enabled");                  // added a class to the button element using classList.add()
// myButton.classList.remove("enabled");               // removed the class

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");            // can also use toggle()
})

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");         // can also use toggle()
})


// use replace() to replace two classes with one another

myButton.addEventListener("click", event => {

    if (event.target.classList.contains("enabled"))         // using contains to see if the element contains that class
    {
        event.target.classList.replace("enabled", "disabled")
    }

    else if (event.target.classList.contains("disabled"))
    {
        event.target.classList.replace("disabled", "enabled")
    }
})


// index.html file ------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>

//     <button id="myButton">My Button</button>

//     <script src="index.js"></script>
// </body>
// </html>


// style.css file ------------------------------------------------


// #myButton{
//     font-size: 4rem;
//     margin: 10px;
//     border: none;
//     border-radius: 5px;
//     padding: 10px 15px;
// }

// .enabled{
//     background-color: hsl(204, 100%, 50%);
//     color: white;
// }

// .hover{
//     box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.2);           /* 0 horizontal offset, 0 vertical offset, 10px blur effect, color black with alpha 20% */
//     font-weight: bold;
// }

// .disabled{
//     background-color: hsl(0, 0%, 60%);
//     color: hsl(0, 0%, 80%);
// }


//-------------------------------------------------------------------------------------------------------------


// Callback Hell


// Callback Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 It is an old pattern to handle asynchronous functions.
//                 Use Promises + asynch/await to avoid Callback Hell


// setTimeout is an asynchronus function, if task 2 takes less time than task 1 it will complete first
// also since all tasks have delay, we will get the "all tasks complete" right away because it has no delay
// in order to make the tasks execute one by one, we'll use callback, where after task 1 is completed, we call the next task, and nest it on call time

// callback Hell example:

function task1(callback){
    setTimeout(() => {
        console.log("task 1 complete");
        callback();
    }, 2000);
}

function task2(callback){
    setTimeout(() => {
        console.log("task 2 complete");
        callback();
    }, 1000);
}

function task3(callback){
    setTimeout(() => {
        console.log("task 3 complete");
        callback();
    }, 3000);
}

function task4(callback){
    setTimeout(() => {
        console.log("task 4 complete");
        callback();
    }, 1500);
}

task1(() => {
    task2(() => {
        task3(() => {
            task4(() => console.log("All Tasks complete"));         // this is what callback hell looks like, pyramid shaped
        });
    });
});


//-------------------------------------------------------------------------------------------------------------


// Promises

// Promise = an Object that manages asynchronous operations.
//           Wrap a promise Object around {asynchronous code}
//           "I promise to return a value"
//           Pending -> resolved or rejected
//           new Promise((resolve, reject) => {asynchronous code})

// do these chores in order (using promises instead of callback hell)

function walkDog(){

    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        
        const dogWalked = true;

        if(dogWalked){
            resolve("You walk the dog");            // The value inside resolve() is the result of the promise
        }
        else{
            reject("You didn't walk the dog");      // if the promise failed or rejected, execute this line, when a promise is rejected, the next chained promises won't execute
        }
    }, 1500);

    });
}

function cleanKitchen(){

    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        
        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve("You clean the kitchen");
        }
        else{
            reject("You didn't clean the kitchen");
        }
    }, 1500);

    });
}

function takeOutTrash(){

    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        
        const trashOut = false;

        if(trashOut){
            resolve("You take trash out");
        }
        else{
            reject("You didn't take trash out");
        }
    }, 1500);

    });
}

// will be called with method chaining instead of a callback hell

walkDog().then(value => {console.log(value); return cleanKitchen()})                                // value here is the value from the resolve method of walkDog() method
         .then(value => {console.log(value); return takeOutTrash()})                                // Why value Contains the resolve() Value? because JavaScript automatically passes the resolved value to .then(). Why You return Another Promise? so that it is chained and it will be excuted next, So now the next .then() waits for that promise.
         .then(value => {console.log(value); return console.log("You finished all the chores")})
         .catch(error => console.error(error));                                                     // this will catch any rejected promises and throw it as an error


//-------------------------------------------------------------------------------------------------------------


// Async/Await

//      async = makes the function return a promise
//      await = makes an async function wait for a promise

//              Allows you to write asynchronous code in synchronous manner
//              Async doesn't have resolve or reject parameters
//              Everything after Await is placed in an event queue

// previous example

function walkDog(){

    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        
        const dogWalked = true;

        if(dogWalked){
            resolve("You walk the dog");            // The value inside resolve() is the result of the promise
        }
        else{
            reject("You didn't walk the dog");      // if the promise failed or rejected, execute this line, when a promise is rejected, the next chained promises won't execute
        }
    }, 1500);

    });
}

function cleanKitchen(){

    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        
        const kitchenCleaned = true;

        if(kitchenCleaned){
            resolve("You clean the kitchen");
        }
        else{
            reject("You didn't clean the kitchen");
        }
    }, 1500);

    });
}

function takeOutTrash(){

    return new Promise ((resolve, reject) => {
    setTimeout(() => {
        
        const trashOut = true;

        if(trashOut){
            resolve("You take trash out");
        }
        else{
            reject("You didn't take trash out");
        }
    }, 1500);

    });
}


// using async/await-----------------

async function doChores(){      // adding the word async to write a asynchronous code in a syncrhonous manner, this is an alternative way to execute asynchronous code with method chaining with .then

    try{
        const walkDogResult = await walkDog();      // because walkDog has a promise we need to await the result of that promise, await can only be used with async functions
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!"); 
    }
    catch(error){
        console.error(error);       // this is to catch if a promise was rejected
    }

}

doChores();


//-------------------------------------------------------------------------------------------------------------


// JSON

// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} like an object or [value1, value2, value3] like an array
//        or [{}, {}, {}] an array of objects

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.


// JSON's different forms


// Array
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"]


// Object
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["Jellyfishing", "Karate", "Cooking"]
}


// Array of objects
const people = [{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false    
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true 
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}]

const jsonString = JSON.stringify(people);      // stringify() converts arrays, objects, and array of objects to a long string JSON format


const parsedData = JSON.parse(jsonString);      // parse() converts long strings back to objects/arrays/array of objects

// console.log(parsedData);


// Fetching a JSON file (i.e. reading a JSON file)

fetch("people.json")            // fetch returns a promise so we follow it up with .then
    .then(response => response.json())      // convert the response to json with .json() which also returns a promise, so we use another .then
    .then(value => console.log(value))
    // .then(values => values.forEach(value => console.log(value)))             // to iterate through each object inside the JSON file
    // .then(values => values.forEach(value => console.log(value.name)))        // to iterate through each object's name key
    .catch(error => console.error(error));                                      // add this just in case we can't access the JSON file


//-------------------------------------------------------------------------------------------------------------


// Fetch Data from an API

// fetch = function used for making HTTP request to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})


// using .then with fetch()

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();         // if it didn't fail, return our response in json format
    })
    .then(data => console.log(data.name))
    .catch(error => console.error(error));



// using async/await with fetch()

async function fetchData(){

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");       // returns a promise

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();         // this also returns a promise, that's why we're using await
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

fetchData();


//-------------------------------------------------------------------------------------------------------------


// Pokemon fetch image API


// index.js file ------------------------------------------------

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();       // .value will get the value typed inside the textbox
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);         // returns a promise

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();         // this also returns a promise, that's why we're using await
        
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";     // right now it's none, need to change it to block to show it
    }
    catch(error){
        console.error(error);
    }
}


// index.html file ------------------------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>My Website</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>

//     <input type="text" id="pokemonName" placeholder="Enter Pokemon Name">
//     <button onclick="fetchData()">Fetch Pokemon</button><br>
    
//     <img src="" alt="Pokemon Sprite" id="pokemonSprite" style="display:none">          <!-- style="display: none" will make empty image objects invisible, if the value was block instead, the empty image object will be-->

//     <script src="index.js"></script>
// </body>
// </html>


//-------------------------------------------------------------------------------------------------------------


// Weather App Project

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelectorAll(".cityInput");
const card = document.querySelector(".card");
const apiKey = "b5666d152000c35c4367c8546e8d1cce"


weatherForm.addEventListener("submit", async event =>{                     // the button with type submit uses the submit event, arrow function can be async function as well
    
    event.preventDefault();                 // forms have a devault behavior where they're refresh the page, this line prevents that
    
    const lat = cityInput[0].value;
    const lon = cityInput[1].value;

    if(lon !== "" && lat !== ""){
        try{
            const weatherData = await getWeatherData(lon, lat);
            displayWeatherInfo(weatherData);

        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("Please enter lon and lat");
    }
});


async function getWeatherData(lon, lat){
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

function displayWeatherInfo(data){
    console.log(data)
    const {name: city,
           main: {temp, humidity},
           weather:[{description, id}]} = data;       // object and array destructuring to extract values from the response

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("h1");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `humidity: ${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");
    
    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){
    switch(true){
        case(weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case(weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case(weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case(weatherId >= 600 && weatherId < 700):
            return "❄️";
        case(weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case(weatherId === 800):
            return "☀️";
        case(weatherId >= 801 && weatherId < 810):
            return "☀️";
        default:
            return "❓";
    }
}

function displayError(message){

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}


// index.html file ------------------------------------------------


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    
//     <form class="weatherForm">
//         <input type="text" class="cityInput" placeholder="Enter Lat">
//         <input type="text" class="cityInput" placeholder="Enter Lon">
//         <button type="submit">Get Weather</button>
//     </form>

//     <div class="card" style="display: none">

//         <!-- <h1 class="cityDisplay">Miami</h1>
//         <p class="tempDisplay">90°F</p>
//         <p class="humidityDisplay">Humidity: 75%</p>
//         <p class="descDisplay">Clear Skies</p>
//         <p class="weatherEmoji">☀️</p>
//         <p class="errorDisplay">Please enter a city</p> -->
//     </div>

//     <script src="index.js"></script>
// </body>
// </html>


// style.css file ------------------------------------------------


// body{
//     font-family: Arial, sans-serif;      /* when two fonts are entered, the next ones are backup if the first isn't supported */
//     background-color: hsl(0, 0%, 95%);
//     margin: 0;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// .weatherForm{
//     margin: 20px;
// }

// .cityInput{
//     padding: 10px;
//     font-size: 2rem;
//     font-weight: bold;
//     border: 2px solid hsla(0, 0%, 20%, 0.3);
//     border-radius: 10px;
//     margin: 10px;
//     width: 300px;
// }

// button[type="submit"]{                      /* select all buttons with a type of submit */
//     padding: 10px 20px;
//     font-weight: bold;
//     font-size: 2rem;
//     background-color: hsl(122, 39%, 50%);
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
// }

// button[type="submit"]:hover{
//     background-color: hsl(122, 39%, 40%);
// }

// .card{
//     background: linear-gradient(180deg, hsl(210, 100%, 75%), hsl(40, 100%, 75%));
//     padding: 50px;
//     border-radius: 10px;
//     box-shadow: 2px 2px 5px hsla(0, 0%, 0%, 0.5);
//     min-width: 300px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// h1{
//     margin-top: 0;
//     margin-bottom: 25px;
// }

// p{
//     font-size: 1.5;
//     margin: 5px 0;          /* 5 pixels on the top and botton, 0 on the sides */
// }

// .cityDisplay, .tempDisplay{         /* selecting two classes at the same time */
//     font-size: 3.5rem;
//     font-weight: bold;
//     color: hsla(0, 0%, 0%, 0.75);
//     margin-bottom: 25px;
// }

// .humidityDisplay{
//     font-weight: bold;
//     margin-bottom: 25px;
// }

// .descDisplay{
//     font-style: italic;
//     font-weight: bold;
//     font-size: 2rem;
// }

// .weatherEmoji{
//     margin: 0;
//     font-size: 7.5rem;
// }

// .errorDisplay{
//     font-size: 2.5rem;
//     font-weight: bold;
//     color: hsla(0, 0%, 0%, 0.75);
// }


//-------------------------------------------------------------------------------------------------------------

// JavaScript Course Over :)

//-------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------


// React Course

// 1. cmd command to create a react app:
// npm create vite@latest
// latest means latest version
// vite is a development server (modern replacement of create-react-app, outdated)


// 2. command to run the React app
// cd react-app
// npm run dev


// 3. node_modules folder contains external libraries and packages our app relies on

// 4. public folder: contains any public assets (public fonts, images, videos)
// they're not bundled during the final output they're typically available via a url

// 4. assets folder: contains any private assets (public fonts, images, videos)
// they're bundled during the final output

// 5 src folder:
//      main.jsx file: main file, jsx is JavaScript XML
//      app.jsx is a component (by default is the root component)
//      app.css for app
//      index.css main css file for the application

// 6 index.html: main entry point to our program


// main.jsx file ------------------------------------------------
// Unchanged

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// main.jsx is the main file that runs the page
// <App /> is the app that main.jsx file will run, it will contain the components that we want to display to the page
// Components are the building blocks of react apps, basically peices of code combined together to make a web app/page


// App.jsx file ------------------------------------------------


import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

function App() {

  return(
    <>
    <Header></Header>
    <Food></Food>
    <Footer></Footer>
    </>
  );
}

export default App

// App is the main component here, in Header.jsx and Footer.jsx we make functions that return
// html elements then we import them here
// then in the App function we return them as components in this format <Header></Header>
// you can type <Header></Header> like <Header/> for a shorthand
// components only return one element so to add multiple elements we use JSX fragment
// JSX fragment <> which is basically an empty tag to put all your elements in </>


// Header.jsx file ------------------------------------------------


function Header(){      //Header here is a component, this whole file is

    return(             // a component can only return one element (but it can have children)
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header


// <nav> is navbar
// <hr> is a horizontal rule


// Footer.jsx file ------------------------------------------------


function Footer(){

    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Website Name</p>
        </footer>
    );
}

export default Footer


// &copy; prints a copywrite symbol the one with C
// to insert javascript inside the return statement we use {} but outside of the return statement you don't need anything


// Food.jsx file ------------------------------------------------


function Food(){

    const food1 = "Orange";
    const food2 = "Banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food


// index.css file ------------------------------------------------


// :root {
//   font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
//   line-height: 1.5;
//   font-weight: 400;

//   color-scheme: light dark;
//   color: rgba(255, 255, 255, 0.87);
//   background-color: #242424;

//   font-synthesis: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// a {
//   font-weight: 500;
//   color: #646cff;
//   text-decoration: inherit;
// }
// a:hover {
//   color: #535bf2;
// }

// body {
//   margin: 0;
//   display: flex;
//   place-items: center;
//   min-width: 320px;
//   min-height: 100vh;
// }

// h1 {
//   font-size: 3.2em;
//   line-height: 1.1;
// }

// button {
//   border-radius: 8px;
//   border: 1px solid transparent;
//   padding: 0.6em 1.2em;
//   font-size: 1em;
//   font-weight: 500;
//   font-family: inherit;
//   background-color: #1a1a1a;
//   cursor: pointer;
//   transition: border-color 0.25s;
// }
// button:hover {
//   border-color: #646cff;
// }
// button:focus,
// button:focus-visible {
//   outline: 4px auto -webkit-focus-ring-color;
// }

// @media (prefers-color-scheme: light) {
//   :root {
//     color: #213547;
//     background-color: #ffffff;
//   }
//   a:hover {
//     color: #747bff;
//   }
//   button {
//     background-color: #f9f9f9;
//   }
// }


//-------------------------------------------------------------------------------------------------------------


// Card Components


// main.jsx file ------------------------------------------------


// Unchanged


// App.jsx file ------------------------------------------------


import Card from './Card.jsx'


function App() {

  return(
    <>
    <Card></Card>
    </>
  )
}

export default App


// Card.jsx file ------------------------------------------------


import profilePic from './assets/card.jpg'

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="the alternative text if the image didn't load"></img>
            <h2 className="card-title">Mohammad</h2>
            <p className="card-text">this is a template text that i don't know what to type in so i typed this text to fill in the void</p>

        </div>
    );
}

export default Card

// with jsx, class is a reserved keyword, so we use className
// to put a placeholder image in the src attribute type: https://via.placeholder.com/150 didn't work with me though


// index.css file ------------------------------------------------


// .card{
//   border: 1px solid hsl(0, 0%, 80%);
//   border-radius: 10px;
//   box-shadow: 5px 5px hsla(0, 0%, 0%, 0.1)00;
//   padding: 2px;
//   margin: 10px;
//   text-align: center;
//   max-width: 250px;
//   display: inline-block; /* inline-block = Same Line Placement: Elements with display: inline-block sit on the same line as other inline or inline-block elements, and do not force a new line before or after themselves, If there is not enough horizontal space on a single line, the element will wrap onto the next line*/
// }

// .card .card-image{
//   max-width: 60%;
//   height: auto; /* will automaticlly resize */
//   border-radius: 50%;
//   margin-bottom: 10px;
// }

// .card .card-title{
//   font-family: Arial, sans-serif;
//   margin: 0;
//   color: hsl(0, 0%, 20%)
// }

// .card .card-text{
//   font-family: Arial, sans-serif;
//   color: hsl(0, 0%, 30%);
// }


//-------------------------------------------------------------------------------------------------------------


// How to style react components with CSS

// (not including external frameworks like tailwind or preprocessors such as sas)

// few basic techniques

// 1. external css stylesheet
// 2. modules (dedicated css stylesheet for each component)
// 3. inline styles



// 1. external css stylesheet

// advantages
// 1. easy to use for simple projects
// 2. it gives you flexibility with media queries and pseudo selectors
// 3. used best to apply global styles throught the web application

// disadvantages
// 1. can lead to naming conflicts
// 2. for large web applications you will have a lot of different buttons with different names, you will need a strong naming convention and good organization
// 3. it might be difficult to keep track of all the different class names for large web apps



// App.jsx file ------------------------------------------------

import Button from './Button.jsx'


function App() {

  return(
    <>
    <Button></Button>
    </>
  )
}

export default App


// Button.jsx file ------------------------------------------------

function Button(){

    return(
        <button className="button">Click Me</button>
    )
}


// index.css file ------------------------------------------------

// .button{
//   background-color: hsl(200, 100%, 50%);
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
// }


// ---------------------------------------------------------------


// 2. modules styling

// with modules styling we create modules/folders for each component, and a specific css file for each jsx component

// App.jsx file ----------------------------------------------------------

// only this line changed for the path
import Button from './Button/Button.jsx'

// Button/Button.module.css file -----------------------------------------


// .button{
//   background-color: hsl(200, 100%, 50%);
//   color: white;
//   padding: 10px 20px;
//   border-radius: 5px;
//   border: none;
//   cursor: pointer;
// }


// Button/Button.jsx file ------------------------------------------------


import styles from "./Button.module.css"

function Button(){

    return(
        <button className={styles.button}>Click Me</button>
    )
}

export default Button


// className={styles.button} is a module styling method, the {} indicate that this is a dynamic value
// advantages of module styling
// 1. is that it avoids naming conflicts because a unique class is going to be generated via a hashing algorithm
// disadvantages
// 1. that it makes global styling less convenient
// 2. it's best used for individual components with their own unique styles

// ---------------------------------------------------------------


// 3. inline styles

// inline styles creates a constant that will store the style data in the component itself


// App.jsx file ---------------------------------------------------

// only this line changed for the path
import Button from './Button.jsx'

// Button.jsx file ------------------------------------------------

function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }
    return(
        <button style={styles}>Click Me</button>
    )
}

export default Button


// rules of typing inline styles inside jsx files
// 1. replace dashes - with camelCase Naming convention
// 2. all values should be "strings"
// 3. replace endlines ; with commas ,

// in the return statement we add an attribute called style to the element and pass a daynamic value to it using {} which will be our styles constant

// advantaes of inline styling
// convenient and easy to understand
// it prevents global style conflicts because we're not working with classnames
// it's great for isolated components with minimal styling

// disadvantages are
// that becomes increasngly less maintainable in large applications
// it reduces the readability of your components esspecially if you have a lot of css properties
// it's not great for any complex styling such as responsive css, it's better for components with mininal styling


//-------------------------------------------------------------------------------------------------------------


// Props

// defaultProps are now deprecated in React 19+

// props =  read-only properties that are shared between components.
//          A parent component can send data to a child component.
//          when you include a component within a parent, you can send that child component key-value pairs
//          <Component key=value />


// (Deprecated)
// propTypes = a mechanism that ensures that the passed value is of the correct datatype
//             age: PropTypes.number


// (Deprecated)
// defaultProps = default values for props in case they are not passed from the parent component
//                name: "Guest"


// App.jsx file ---------------------------------------------------

import Student from './Student.jsx'

function App() {

  return(
    <>
    <Student name="Spongebob" age={30} isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="Squidward" age={50} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student />
    </>
  )
}

export default App

// age={30} we use {} to indicate it's an integer/Number without it we get an error
// When to use {} in props
// Use {} whenever you're passing:
// - Numbers → {30}
// - Booleans → {true}
// - Variables → {age}
// - Expressions → {10 + 20}
// - Objects/arrays → {[1,2,3]}

// props are useful when you want to show different data using the same component multiple times by passing in different data through the props


// Student.jsx file ---------------------------------------------------

import PropTypes from "prop-types"

function Student(props){        // for this component to accept props, this function needs a props parameter, props is going to be a JavaScript Object

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.propTypes ={                // defining our prop types, if a different type was passed we will get a warning, good for debugging
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {        // deprecated not gonna work
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student


// <p>Student: {props.isStudent}</p>
// booleans will not display naturally, so we'll use a ternary operator


// index.css file ---------------------------------------------------


// .student{
//   font-family: Arial, sans-serif;
//   font-size: 2em;
//   padding: 10px;
//   border: 1px solid hsla(0, 0%, 50%, 0.8);
// }

// .student p{     /* accessing the class student then accessing any paragraph elements within it*/
//   margin: 0;
// }


//-------------------------------------------------------------------------------------------------------------


// Conditional Rendering

// conditional rendering = allows you to control what gets rendered in your application
//                         based on certain conditions (show, hide, or change components)


// App.jsx file ---------------------------------------------------


import UserGreeting from './UserGreeting.jsx'

function App() {

  return(
    <>
        <UserGreeting isLoggedIn={true} username="Mohammad"/>
    </>
  )
}

export default App


// Student.jsx file ---------------------------------------------------


function UserGreeting(props){

    if(props.isLoggedIn){       // we could also use a ternary operator
        return <h2 className="welcome-message">Welcome {props.username}</h2>
    }
    else{           // you can also just return after the if without the else because the first return will exit the code
        return <h2 className="login-prompt">Please log in to continue</h2>
    }
}

export default UserGreeting


// index.css file ---------------------------------------------------


// .welcome-message{
//   font-size: 2em;
//   background-color: hsl(120, 100%, 42%);
//   color: white;
//   padding: 10px;
//   border-radius: 5px;
//   margin: 0;
// }

// .login-prompt{
//   font-size: 2em;
//   background-color: hsl(0, 100%, 42%);
//   color: white;
//   padding: 10px;
//   border-radius: 5px;
//   margin: 0;
// }


//-------------------------------------------------------------------------------------------------------------


// Render Lists


// App.jsx file ---------------------------------------------------

import List from './List.jsx'

function App() {

  return(
    <>
        <List />
    </>
  )
}

export default App

// List.jsx file ---------------------------------------------------

// array of strings

function List(){

    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];       // this will print the strings all together

    const listItems = fruits.map(fruit => <li>{fruit}</li>);    // we need to give it tags making it an HTML list item in an ordered/unordered list
    return(<ul>{listItems}</ul>);
}

export default List


// ---------------------------------------

// an array of objects

function List(){

    const fruits = [{name: "apple", calories: 95},
                    {name: "orange", calories: 45},
                    {name: "banana", calories: 105},
                    {name: "coconut", calories: 159},
                    {name: "pineapple", calories: 37}];


    fruits.sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));             // sorting array objects by their name proprety alphabetically lexicographically using the built-in localeCompare() method
    fruits.sort((firstItem, secondItem) => secondItem.name.localeCompare(firstItem.name));             // sorting in reverse
    fruits.sort((firstItem, secondItem) => firstItem.calories - secondItem.calories);                     // sorting numerically
    fruits.sort((firstItem, secondItem) => secondItem.calories - firstItem.calories);                     // sorting numerically in reverse



    const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);   // this will work without they key attribute but we'll get this error {Each child in a list should have a unique "key" prop."}, this is a react warning wanting us to assign a key to each list item, since the name is unique we used it, but generally we need a unique id, &nbsp; is a nonbreaking space character
    return(<ul>{listItems}</ul>);


// ---------------------------------------


// filtering objects by certain criteria

function List(){

    const fruits = [{name: "apple", calories: 95},
                    {name: "orange", calories: 45},
                    {name: "banana", calories: 105},
                    {name: "coconut", calories: 159},
                    {name: "pineapple", calories: 37}];


        // displaying only low calories fruits
        const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalfruit => <li key={lowCalfruit.name}>{lowCalfruit.name}: &nbsp; <b>{lowCalfruit.calories}</b></li>);
    return(<ul>{listItems}</ul>);
}

export default List

}


// ---------------------------------------


// transform the list component to be reusable with different lists


// App.jsx file ---------------------------------------------------

import List from './List.jsx'

function App() {

  const fruits = [{name: "apple", calories: 95},
                {name: "orange", calories: 45},
                {name: "banana", calories: 105},
                {name: "coconut", calories: 159},
                {name: "pineapple", calories: 37}];

    const vegtebales = [{name: "potatoes", calories: 110},
                        {name: "celery", calories: 15},
                        {name: "carrots", calories: 25},
                        {name: "corn", calories: 63},
                        {name: "broccoli", calories: 50}];

  return(
    <>
        <List  items={fruits} category="Fruits"/>
        <List  items={vegtebales} category="Vegtebales"/>
    </>
  )
}

export default App

// List.jsx file ---------------------------------------------------

function List(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.name}>{item.name}: &nbsp; <b>{item.calories}</b></li>);
    return(<>
            <h3>{category}</h3>
            <ul>{listItems}</ul>
           </>
    );
}

export default List


//-------------------------------------------------------------------------------------------------------------


// Click Events

// click event = An interaction when a user clicks on a specific element, we can respond to clicks by passing
//               a callback to the onClick event handler


// App.jsx file ---------------------------------------------------

import Button from './Button.jsx'

function App() {

  return(
    <>
        <Button />
    </>
  )
}

export default App


// Button.jsx file ---------------------------------------------------


function Button(){

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    return(<button onClick={() => handleClick2('Mohammad')}>Click me 😀</button>)       // wrap in arrow function to avoid immediate execution when passing arguments
} // there is also onDoubleClick

export default Buttons


//-------------------------------------------------------------------------------------------------------------


// React Hooks and useState() Hooks

// React hook = Special function that allows functional components to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReucer, useCallback, and more...)


// useState() = A React hook that allows the creation of a stateful variable AND a setter function to update its value in the Vitrual DOM.
//              [name, setName]


// stateful variable = when you update this variable, that change is reflected in the Virtual DOM, normal variables don't


// A Virtual DOM (VDOM) = is a lightweight, in-memory JavaScript representation of the actual browser Document Object Model (DOM). 
//                        Used by frameworks like React and Vue, it optimizes performance by calculating UI changes in memory first
//                        then applying only the necessary, minimal updates to the real DOM, reducing expensive browser


// App.jsx file ---------------------------------------------------


import UseStateHook from './UseStateHook.jsx'

function App() {

  return(
    <>
        <uUseStateHook />
    </>
  )
}

export default App


// UseStateHook.jsx file ---------------------------------------------------


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


//-------------------------------------------------------------------------------------------------------------

// Counter Program


// App.jsx file ---------------------------------------------------


import Counter from './Counter.jsx'

function App() {

  return(
    <>
        <Counter />
    </>
  )
}

export default App


// Counter.jsx file ---------------------------------------------------


import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);

    }

    return(
            <div className="counter-container">
                <p className="count-display">{count}</p>
                <button className="counter-button" onClick={decrement}>Decrement</button>
                <button className="counter-button" onClick={reset}>reset</button>
                <button className="counter-button" onClick={increment}>Increment</button>

            </div>
        );
}

export default Counter


//-------------------------------------------------------------------------------------------------------------

// onChange Event Handler

// onChange = an event hanler used primarily with form elements, ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes


// App.jsx file ---------------------------------------------------


import onChangeEventHandler from './onChangeEventHandler.jsx'

function App() {

  return(
    <>
        <onChangeEventHandler />
    </>
  )
}

export default App


// onChangeEventHandler.jsx file ---------------------------------------------------


import React, {useState} from 'react';


function onChangeEventHandler(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(<div>
        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="Number" />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder="Add Comment" />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value=""> Select an Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="Pick Up" 
                   checked={shipping === "Pick Up"}
                   onChange={handleShippingChange} />
            Pick Up
        </label>
        <br></br>
        <label>
            <input type="radio" value="Delivery"
                   checked={shipping === "Delivery"}
                   onChange={handleShippingChange} />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>)
}

export default onChangeEventHandler

// onChange will update instantly to whatever we type in the textfield, function gets called each time a change happens
//  <input type="Number" /> will give two arrows to increasae and decreas the number (super coool)


//-------------------------------------------------------------------------------------------------------------


// Color Picker App


// App.jsx file ---------------------------------------------------


import ColorPicker from "./ColorPicker"

function App(){

  return(<ColorPicker />)
}

export default App


// ColorPicker.jsx file ---------------------------------------------------


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


// index.css file ---------------------------------------------------


// body{
//     font-family: Arial, sans-serif;
// }

// .color-picker-container{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

// h1{
//     margin: 50px;
//     font-size: 3rem;
// }

// .color-display{
//     width: 300px;
//     height: 300px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border: 5px solid hsl(0, 0%, 80%);
//     border-radius: 25px;
//     margin-bottom: 25px;
//     transition: 0.25s ease;
// }

// .color-display p{
//     color: hsl(0, 0%, 20%);
//     font-size: 2rem;
//     text-align: center;
// }

// label{
//     font-size: 1.5rem;
//     font-weight: bold;
//     margin-bottom: 10px;
// }

// input[type="color"]{
//     width: 75px;
//     height: 50px;
//     padding: 5px;
//     border-radius: 10px;
//     border: 5px solid hsl(0, 0, 80%);

// }


//-------------------------------------------------------------------------------------------------------------

// Updater Functions

// updater function = A function passed as an argument to setState(), usually
//                    ex. setYear(year + 1), a better practice would be setYear(updater function) which will be setYear(y => y + 1)
//                    Allows for safe updates based on the previous state
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions


// App.jsx file ---------------------------------------------------


import CounterUpdFun from './CounterUpdFun.jsx'

function App() {

  return(
    <>
        <CounterUpdFun />
    </>
  )
}

export default App


// CounterUpdFun.jsx file ---------------------------------------------------


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


//-------------------------------------------------------------------------------------------------------------


// Update Objects in State


// App.jsx file ---------------------------------------------------


import UpdObjSt from './UpdObjSt.jsx'

function App() {

  return(
    <>
        <UpdObjSt />
    </>
  )
}

export default App


// UpdObjSt.jsx file ---------------------------------------------------


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


//-------------------------------------------------------------------------------------------------------------


// Update Arrays in state


// App.jsx file ---------------------------------------------------


import UpdArrSt from './UpdArrSt.jsx'

function App() {

  return(
    <>
        <UpdArrSt />
    </>
  )
}

export default App


// UpdArrSt.jsx file ---------------------------------------------------


import React, { useState } from 'react'

function UpdArrSt(){

    const [ foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    
    function handleAddFood(){
        
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = ""             // resetting the text field only, has no other effect

        setFoods(prevFoods => [...prevFoods, newFood]);      // keep the list and add to it using ...spread operator
    }
    
    function handleRemoveFood(index){

        setFoods(foods.filter((_, indexOfArray) => indexOfArray != index))               // using Array filter function to remove the element we want removed, this function expects an element and an index, we gave the index a different name to not conflict with the function index parameter, the element paramter is named _ by convention when it is not being used 
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


//-------------------------------------------------------------------------------------------------------------


// Update Array of Objects in State


// App.jsx file ---------------------------------------------------


import UpdArrObjSt from './UpdArrObjSt.jsx'

function App() {

  return(
    <>
        <UpdArrObjSt />
    </>
  )
}

export default App


// UpdArrObjSt.jsx file ---------------------------------------------------


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


//-------------------------------------------------------------------------------------------------------------


// To-Do-List App


// App.jsx file ---------------------------------------------------


import ToDoList from "./ToDoList"

function App(){

  return(<ToDoList/>)
}

export default App


// ToDoList.jsx file ---------------------------------------------------


import React, { useState } from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setnewTask] = useState("");

    function handleInputChange(event){
        setnewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(prevTasks => [...prevTasks, newTask]);
            setnewTask("");
        }
        
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, indexOfTasks) => indexOfTasks !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){

        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];             //using array destructring two swap two elements of an array
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index){
        
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];             //using array destructring two swap two elements of an array
            setTasks(updatedTasks);
        }
    }


    return(<div className='to-do-list'>

        <h1>To-Do-List</h1>

        <div>
            <input 
            type="text"
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange} />         {/* without this line and function we can't type into the text box */}

            <button className='add-button'
                    onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button'
                            onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className='move-button'
                            onClick={() => moveTaskUp(index)}>
                        UP
                    </button>
                    <button className='move-button'
                            onClick={() => moveTaskDown(index)}>
                        DOWN
                    </button>
                </li>)}
        </ol>
    </div>)
}

export default ToDoList


// index.css file ---------------------------------------------------


// .to-do-list{
//     font-family: Arial, sans-serif;
//     text-align: center;
//     margin-top: 100px;
// }

// h1{
//     font-size: 4rem;
// }

// button{
//     font-size: 1.7rem;
//     font-weight: bold;
//     padding: 10px 20px;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.5s ease;
// }

// .add-button{
//     background-color: hsl(125, 47%, 54%);
// }

// .add-button:hover{
//     background-color: hsl(125, 47%, 44%);
// }

// .delete-button{
//     background-color: hsl(10, 90%, 50%);
// }

// .delete-button:hover{
//     background-color: hsl(10, 90%, 40%);
// }

// .move-button{
//     background-color: hsl(207, 90%, 64%);
// }

// .move-button:hover{
//     background-color: hsl(207, 90%, 54%);
// }

// input[type="text"]{
//     font-size: 1.6rem;
//     padding: 10px;
//     border: 2px solid hsla(0, 0%, 80%, 0.5);
//     border-radius: 5px;
//     color: hsla(0, 0%, 0%, 0.5);
// }

// ol{
//     padding: 0;   
// }

// li{
//     font-size: 2rem;
//     font-weight: bold;
//     padding: 15px;
//     background-color: hsl(0, 0%, 97%);
//     margin-bottom: 10px;
//     border: 3px solid hsla(0, 0%, 85%, 0.75);
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
// }

// .text{
//     flex: 1;
// }

// /*
// flex: 1 is a shortcut for:
//     flex-grow: 1;
//     flex-shrink: 1;
//     flex-basis: 0%

// basically that element with this property will take as much space as possible
// and grow and shrink with the size of the web browser
// */

// .delete-button, .move-button{
//     padding: 8px 12px;
//     font-size: 1.4rem;
//     margin-left: 10px;
// }


//-------------------------------------------------------------------------------------------------------------

// useEffect Hook

// useEffect() = React hook that tells React to do some code when :
//               the component re-renders
//               the compnent mounts (mounting is when a component is created and appended to the DOM)
//               the state of a value changes

// Syntax:
// useEffect(function, [dependencies])


// 1. useEffect(() => {})                Runs after every re-render
// 2. useEffect(() => {}, [])            Runs only once on mount (when supplying it with an empty array)
// 3. useEffect(() => {}, [value])       Runs on mount + when a value changes


// Uses
// #1 Event Listeners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching data from an API
// #5 Clean up when a component unmounts (unmounting is removing a component from the DOM)


// -------------------
// Example 1

// App.jsx file ---------------------------------------------------

import UseEffectHook from './UseEffectHook.jsx'

function App() {

  return(
    <>
        <UseEffectHook />
    </>
  )
}

export default App


// UseEffectHook.jsx file ---------------------------------------------------


import React, {useState, useEffect} from 'react';


function UseEffectHook(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
    

    // this would work even without useEffect i.e. the title will update wwhen changing the title or color, but it will do so everytime which can be resource consuming
    // the usefullness of useEffect is to organize code and free up resources
    useEffect(() =>{
        document.title = `Count: ${count} ${color}`;            // here color changes are not causing a re-render because it's not added to the dependencies

        return () => {                          // cleanup function, when this component unmounts, removed from the DOM, or before the next re-render (if there are no dependencies)
            // some cleanup code, say if we added an event listener when mounting, we would remove it when unmounting
        }
    }, [count]);                                                // the dependacy count here means it will only re-render when count changes, without a dependency, it will re-render for any other change as well, and empty dependency [] means it will only renders when you first mount (open the page) of the component and never again

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }
    
    function subtractCount(){
        setCount(prevCount => prevCount - 1);
    }
    
    function changeColor(){
        setColor(prevColor => prevColor === "green" ? "red" : "green");
    }

    return(<>
            <p style={{color: color}}>Count: {count}</p>            {/* to add a style attribute we need {{}} first curly is for js and the second one is for an object */}
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>Subtract</button><br></br>
            <button onClick={changeColor}>Change Color</button><br></br>
    </>)
}

export default UseEffectHook;


// -------------------
// Example 2


// App.jsx file ---------------------------------------------------

import UseEffectHook from './UseEffectHook.jsx'

function App() {

  return(
    <>
        <UseEffectHook />
    </>
  )
}

export default App


// UseEffectHook2.jsx file ---------------------------------------------------


// displaying window size without useEffect() using event listeners
// this works but has a major problem, it creates a new event listener each time the a re-render happens

import React, {useState, useEffect} from 'react';


function UseEffectHook2(){

    const [width, setWidth] = useState(window.innerWidth);       // innerWidth is a read-only property that returns the interior width of the window's layout viewport in pixels
    const [height, setHeight] = useState(window.innerHeight);
 

    window.addEventListener("resize", handleResize);
    console.log("event listener added")

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<>
        <p>Window Width {width}px</p>
        <p>Window Height {height}px</p>
    </>)
}


export default UseEffectHook2;


// ----------------------------------------------------

// with useEffect()

import React, {useState, useEffect} from 'react';


function UseEffectHook2(){

    const [width, setWidth] = useState(window.innerWidth);      
    const [height, setHeight] = useState(window.innerHeight);
 
    useEffect(() => {
        window.addEventListener("resize", handleResize);        // if you have strict mode on in browser, the event listner will run twice, it will run a developement only setup and a cleanup cycle
        console.log("event listener added")

        return() => {               // cleanup function, do this code before the next re-render or when the component unmounts
            window.removeEventListener("resize", handleResize);
            console.log("event listener removed")
        }
    }, [])
    
    // can have multiple useEffect hooks in one component
    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    },[width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return(<>
        <p>Window Width {width}px</p>
        <p>Window Height {height}px</p>
    </>)
}


export default UseEffectHook2;


//-------------------------------------------------------------------------------------------------------------


// useContext() Hook

// useContext() = React hook that allows you to share values between multiple levels of components
//                without passing props through each level


// Requirements

// 1) Provider Component

// 1.
import {createContext} from 'react';

// 2.
export const MyContext = createContext();

// 3.
<MyContext.Provider value={value}>
    <Child />
  </MyContext.Provider>


// 2) Consumer Components
// 1.
import React, { useContext } from 'react';
import { MyContext } from './ComponentA'

// 2.
const value = useContext(MyContext);


// App.jsx file ---------------------------------------------------

import UseContextHookA from './UseContextHookA'

function App() {

  return(
    <>
      <UseContextHookA />   
    </>
  )
}

export default App


// index.css file ---------------------------------------------------

// .box{
//   border: 3px solid;
//   padding: 25px;
// }


// ----------------------


// Example without useContext()


// UseContextHookA.jsx file ---------------------------------------------------


import React, { useState } from 'react'

import UseContextHookB from './UseContextHookB'

function UseContextHookA(){

    const [user, setUser] = useState("Mohammad")

    return(<div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <UseContextHookB user={user}/>
    </div>)
}

export default UseContextHookA


// UseContextHookB.jsx file ---------------------------------------------------


import UseContextHookC from './UseContextHookC'

function UseContextHookB(props){

    return(<div className='box'>
        <h1>ComponentB</h1>
        <UseContextHookC user={props.user}/>
    </div>)
}

export default UseContextHookB


// UseContextHookC.jsx file ---------------------------------------------------


import UseContextHookD from './UseContextHookD'

function UseContextHookC(props){

    return(<div className='box'>
        <h1>ComponentC</h1>
        <UseContextHookD user={props.user}/>
    </div>)
}

export default UseContextHookC

// we passed props through 3 different components to get it to here, this is known as prop drilling


// UseContextHookD.jsx file ---------------------------------------------------


function UseContextHookD(props){

    return(<div className='box'>
        <h1>ComponentD</h1>
        <h2>{`Hello ${props.user}`}</h2>
    </div>)
}

export default UseContextHookD


// -------------------------------
// Example with useContext()


// UseContextHookA.jsx file ---------------------------------------------------


import React, { useState, createContext } from 'react'
import UseContextHookB from './UseContextHookB.jsx'

export const ComponentAContext = createContext();

function UseContextHookA(){

    const [user, setUser] = useState("Mohammad")

    return(<div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentAContext.Provider value={user}>
            <UseContextHookB user={user}/>          {/* any component that's a child component of our provider component 'A' has access to this value, so in this case it's not just for component B*/}
        </ComponentAContext.Provider>
    </div>)
}

export default UseContextHookA


// UseContextHookB.jsx file ---------------------------------------------------


import UseContextHookC from './UseContextHookC.jsx'

function UseContextHookB(){

    return(<div className='box'>
        <h1>ComponentB</h1>
        <UseContextHookC/>
    </div>)
}

export default UseContextHookB


// UseContextHookC.jsx file ---------------------------------------------------


import UseContextHookD from './UseContextHookD.jsx'

function UseContextHookC(){

    return(<div className='box'>
        <h1>ComponentC</h1>
        <UseContextHookD/>
    </div>)
}

export default UseContextHookC


// UseContextHookD.jsx file ---------------------------------------------------


import React, { useContext } from 'react';
import { ComponentAContext } from './UseContextHookA.jsx';

function UseContextHookD(){

    const user = useContext(ComponentAContext);         // value shared successfully, without prop drilling

    return(<div className='box'>
        <h1>ComponentD</h1>
        <h2>{`Hello ${user}`}</h2>
    </div>)
}

export default UseContextHookD


//-------------------------------------------------------------------------------------------------------------


