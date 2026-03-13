// modules styling

// import styles from "./Button.module.css"

// function Button(){

//     return(
//         <button className={styles.button}>Click Me</button>
//     )
// }

// export default Button


// className={styles.button} is a module styling method, the {} indicate that this is a dynamic value
// advantages of module styling
// 1. is that it avoids naming conflicts because a unique class is going to be generated via a hashing algorithm
// disadvantages
// 1. that it makes global styling less convenient
// 2. it's best used for individual components with their own unique styles

// --------------------------------------------

// inline styles

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

// create a constant that will store the style data
// rules of typing inline styles inside jsx files
// 1. replace dashes - with camelCase Naming convention
// 2. all values should be "strings"
// 3. replace endlines ; with commas ,

// in return we add an attribute called style to the element and pass a daynamic value to it using {} which will be our styles constant

// advantaes of inline styling
// convenient and easy to understand
// it prevents global style conflicts because we're not working with classnames
// it's great for isolated components with minimal styling
// disadvantages are
// that becomes increasngly less maintainable in large applications
// it reduces the readability of your components esspecially if you have a lot of css properties
// it's not great for any complex styling such as responsive css, it's better for components with mininal styling
