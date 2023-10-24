// import React from 'react'
import {BUY_CAKE} from './CakeTypes';

const initialState = {
    numOfCakes: 10
}

const CakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,      // ---> state object contains more than one variable (...state) is compulsory, otherwise no need 
                numOfCakes: state.numOfCakes - action.payload   // payload beacause of newcakecontainer
            }
        default: 
            return state
    }
  
}

export default CakeReducer