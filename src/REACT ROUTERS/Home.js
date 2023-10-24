import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    // Navigating programmatically
  return (
    <div>
        <div>Home Page</div>
        <button onClick={() => navigate('order-summary')}>Place order</button>
    </div>
  )
}

export default Home