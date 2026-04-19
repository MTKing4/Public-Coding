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