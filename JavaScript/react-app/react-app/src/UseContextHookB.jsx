// without useContext

// import UseContextHookC from './UseContextHookC'

// function UseContextHookB(props){

//     return(<div className='box'>
//         <h1>ComponentB</h1>
//         <UseContextHookC user={props.user}/>
//     </div>)
// }

// export default UseContextHookB


// ---------------------

// with useContext

import UseContextHookC from './UseContextHookC.jsx'

function UseContextHookB(){

    return(<div className='box'>
        <h1>ComponentB</h1>
        <UseContextHookC/>
    </div>)
}

export default UseContextHookB