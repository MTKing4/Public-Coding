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