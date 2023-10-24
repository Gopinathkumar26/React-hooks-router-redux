import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './CakeActions';

// React redux + hooks
function HookContainer(number = 1) {
    // const numOfCakes = useSelector(state => state.numOfCakes);
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

  return (
    <div>
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake(number))}>Buy Cake</button>
        </div>
    </div>
  )
}

export default HookContainer