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