import React, { useReducer } from 'react';

//Component with complex state and action (B)

//initialState is an object, 'type' property should be used in reducer fn and dispatch method
//'value' property can be used 

const initialState = {
    counter:0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {counter: state.counter + action.value}        // it is replaced for state + 1 (if state is an object)
        case 'decrement':
            return {counter: state.counter - action.value}        // increment value changed into action.value. value assigned in jsx
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerCounterTwoB() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count - {count.counter}</h2>
        <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:'increment', value:5})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', value:5})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounterTwoB;