import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate = useNavigate()

  return (
    <div>
        <div>Order placed!</div>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}

export default OrderSummary