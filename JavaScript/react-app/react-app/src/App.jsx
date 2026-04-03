// import List from './List.jsx'

// function App() {

//   return(
//     <>
//         <List />
//     </>
//   )
// }

// export default App


// ---------------------------------------

// transform the list component to be reusable with different lists


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