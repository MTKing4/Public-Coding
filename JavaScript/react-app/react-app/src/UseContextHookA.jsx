// without useContext

// import React, { useState } from 'react'

// import UseContextHookB from './UseContextHookB'

// function UseContextHookA(){

//     const [user, setUser] = useState("Mohammad")

//     return(<div className='box'>
//         <h1>ComponentA</h1>
//         <h2>{`Hello ${user}`}</h2>
//         <UseContextHookB user={user}/>
//     </div>)
// }

// export default UseContextHookA

// ---------------------

// with useContext

import React, { useState, createContext } from 'react'
import UseContextHookB from './UseContextHookB.jsx'

export const ComponentAContext = createContext();

function UseContextHookA(){

    const [user, setUser] = useState("Mohammad")

    return(<div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <ComponentAContext.Provider value={user}>
            <UseContextHookB user={user}/>          {/* any component that's a child component of our provider component 'A' has access to this value, so in this case it's not just for component B*/}
        </ComponentAContext.Provider>
    </div>)
}

export default UseContextHookA