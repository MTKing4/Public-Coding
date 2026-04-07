
function Button(){

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    return(<button onClick={() => handleClick2('Mohammad')}>Click me 😀</button>)       // wrap in arrow function to avoid immediate execution when passing arguments
} // there is also onDoubleClick

export default Button