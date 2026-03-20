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
