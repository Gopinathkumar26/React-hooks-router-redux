import React, { useState } from 'react';
import EffectHookMouse from './EffectHookMouse';

//useEffect with cleanup sample

function EffectMouseContainer() {
    const [display, setDisplay] = useState(true);

  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle</button>
        {display && <EffectHookMouse/>}
    </div>
  )
}

export default EffectMouseContainer;