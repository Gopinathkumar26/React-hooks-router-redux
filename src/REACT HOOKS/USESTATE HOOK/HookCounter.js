import React, { useState } from 'react';

//Simple useState functional component

function HookCounter() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default HookCounter;