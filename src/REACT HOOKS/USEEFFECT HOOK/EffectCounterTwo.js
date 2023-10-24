import React, { useEffect, useState } from 'react';

//Simple useEffect component with conditionally run effects

function EffectCounterTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating document title')
        document.title = `You Clicked ${count} times`
    },[count])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default EffectCounterTwo;