// example with useState()

// import React, {useState, useEffect, useRef} from 'react';

// function UseRefHook(){

//     let [number, setNumber] = useState(0);

//     useEffect(() => {
//         console.log("Component rendered")       // this is to test if a render is happening every time the number changes
//     })

//     function handleClick(){
//         setNumber(prevNumber => prevNumber + 1);
//     }

//     return(<button onClick={handleClick}>
//         Click Me!
//     </button>);
// }

// export default UseRefHook;


// ---------------------------

// example with useRef()


import React, {useState, useEffect, useRef} from 'react';

function UseRefHook(){

    const ref = useRef(0);           // useRef returns a 'ref object' with a single 'current' property initially set to the 'initial value' you provided, the current property can store a value, array, object or an HTML element
    const HTMLref = useRef(null);

    useEffect(() => {
        console.log("Component rendered")       // this is to test if a render is happening every time the numnbe changes
    })

    function handleClick(){
        ref.current++;              //current is the value that useRef started with, 0
        console.log(ref.current);
        console.log(HTMLref)
        HTMLref.current.focus();            //focus is a built-in method to focus on the object, this will cause changes to the input element to see if a re-render happens, but it doesn't because we're using useRef()
        HTMLref.current.style.backgroundColor = "Yellow"
    }

    return(<div>
                <button onClick={handleClick}>
                    Click Me!
                </button>
                <input ref={HTMLref} />         {/* ref attribute to reference an HTML element */}
            </div>);
}

export default UseRefHook;