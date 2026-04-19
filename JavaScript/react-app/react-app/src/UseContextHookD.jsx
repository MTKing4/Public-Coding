// without useContext

// function UseContextHookD(props){

//     return(<div className='box'>
//         <h1>ComponentD</h1>
//         <h2>{`Hello ${props.user}`}</h2>
//     </div>)
// }

// export default UseContextHookD


// ---------------------

// with useContext

import React, { useContext } from 'react';
import { ComponentAContext } from './UseContextHookA.jsx';

function UseContextHookD(){

    const user = useContext(ComponentAContext);         // value shared successfully, without prop drilling

    return(<div className='box'>
        <h1>ComponentD</h1>
        <h2>{`Hello ${user}`}</h2>
    </div>)
}

export default UseContextHookD