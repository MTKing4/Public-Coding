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