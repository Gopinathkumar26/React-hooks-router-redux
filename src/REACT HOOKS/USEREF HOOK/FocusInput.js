import React, { useEffect, useRef } from 'react';

//Simple component with useRef

function FocusInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
  return (
    <div>
        <input ref={inputRef} type='text'/>
    </div>
  )
}

export default FocusInput;