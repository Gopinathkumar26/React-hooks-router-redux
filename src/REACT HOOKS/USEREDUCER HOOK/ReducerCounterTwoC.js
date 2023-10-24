import React, { useReducer } from 'react';

//Component with complex state and action (B)

//initialState is an object, 'type' property should be used in reducer fn and dispatch method
//'value' property can be used 
// In state object contains more than one variable, it should be combine with spread operator (...state)

const initialState = {
    firstCounter:0,
    secondCounter:10
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value}        // it is replaced for state + 1 (if state is an object)
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value}        // increment value changed into action.value. value assigned in jsx
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value} 
        case 'reset':
            return initialState
        default:
            return state
    }
}
function ReducerCounterTwoC() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <h2>Count - {count.firstCounter}</h2>
        <h2>Count - {count.secondCounter}</h2>
        <button onClick={() => dispatch({type:'increment', value:1})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:'increment', value:5})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement', value:5})}>Decrement</button>
        <button onClick={() => dispatch({type:'increment2', value:1})}>Increment</button>
        <button onClick={() => dispatch({type:'decrement2', value:1})}>Decrement</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounterTwoC;