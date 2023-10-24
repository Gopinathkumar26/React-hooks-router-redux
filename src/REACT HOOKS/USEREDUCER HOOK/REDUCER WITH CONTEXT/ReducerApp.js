//  ReducerApp ---> Com A
//             ---> Com B  ---> Com D
//             ---> Com C  ---> Com E ---> Com F  

import React, { createContext, useReducer } from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


export const CounterContext = createContext()

const initialState =0

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function ReducerApp() {
    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    
       <CounterContext.Provider
         value={{countState: count, countDispatch: dispatch}}>
         <div>
           <h2>Count - {count}</h2>
           <ComponentA/>
           <ComponentB/>
           <ComponentC/>
         </div>
       </CounterContext.Provider>
        
    
  )
}

export default ReducerApp;