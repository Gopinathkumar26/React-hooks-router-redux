import React, {useContext} from 'react';
import { CounterContext } from './ReducerApp';

function ComponentA() {
  const counterContext = useContext(CounterContext)

  return (
    <div>
      <h2>ComponentA - {counterContext.countState}</h2>
        <button onClick={() => counterContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA;