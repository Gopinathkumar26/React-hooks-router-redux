import React, { useState } from 'react';

//Simple functional useState component

function HookCounterTwo() {

    const initialValue = 0;
    const [count, setCount] = useState(0);

    const incrementFive = () => {
        for(let i=0; i<5; i++) {
            setCount(prevState => prevState + 1)
        }
       // setCount(prevState => prevState + 5)
    }

  return (
    <div>
        <h2>Count- {count}</h2>
        <button onClick={() => setCount(initialValue)}>Reset</button>
        <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
        <button onClick={incrementFive}>Increment by 5</button>
    </div>
  )
}

export default HookCounterTwo;