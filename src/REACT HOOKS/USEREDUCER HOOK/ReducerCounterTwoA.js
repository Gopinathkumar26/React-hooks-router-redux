import React, { useReducer } from 'react';

//Component with complex state and action (A)

//initialState is an object, 'type' property should be used in reducer fn and dispatch method

const initialState = {
    counter:0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {counter: state.counter + 1}        // it is replaced for state + 1 (if state is an object)
        case 'decrement':
            return {counter: state.counter - 1}
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerCounterTwoA() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count - {count.counter}</h2>
        <button onClick={() => dispatch({type:'increment'})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounterTwoA;