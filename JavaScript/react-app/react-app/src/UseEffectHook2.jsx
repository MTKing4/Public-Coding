// displaying window size without useEffect() using event listeners
// this works but has a major problem, it creates a new event listener each time the a re-render happens

// import React, {useState, useEffect} from 'react';


// function UseEffectHook2(){

//     const [width, setWidth] = useState(window.innerWidth);       // innerWidth is a read-only property that returns the interior width of the window's layout viewport in pixels
//     const [height, setHeight] = useState(window.innerHeight);
 

//     window.addEventListener("resize", handleResize);
//     console.log("event listener added")

//     function handleResize(){
//         setWidth(window.innerWidth);
//         setHeight(window.innerHeight);
//     }
//     return(<>
//         <p>Window Width {width}px</p>
//         <p>Window Height {height}px</p>
//     </>)
// }


// export default UseEffectHook2;


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
