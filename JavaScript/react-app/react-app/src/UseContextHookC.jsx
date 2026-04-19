// without useContext

// import UseContextHookD from './UseContextHookD'

// function UseContextHookC(props){

//     return(<div className='box'>
//         <h1>ComponentC</h1>
//         <UseContextHookD user={props.user}/>
//     </div>)
// }

// export default UseContextHookC

// we passed props through 3 different components to get it to here, this is known as prop drilling


// ---------------------

// with useContext

import UseContextHookD from './UseContextHookD.jsx'

function UseContextHookC(){

    return(<div className='box'>
        <h1>ComponentC</h1>
        <UseContextHookD/>
    </div>)
}

export default UseContextHookC