import React, {useState, useEffect, useRef} from 'react'

//Simple timer component with useRef
// Incase we use interval instead of intervalRef, it shows error interval variable runs only inside useEffect
// That's why we use useRef Hook

function RefHookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

  return (
    <div>
        Timer - {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default RefHookTimer