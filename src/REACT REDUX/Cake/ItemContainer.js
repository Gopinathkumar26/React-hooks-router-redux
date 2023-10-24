import React from 'react'
import { buyCake } from './CakeActions'
import { buyIceCream } from '../IceCream/iceCreamActions'
import { connect } from 'react-redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>Items - {props.item}</h2>
        <button onClick={props.buyItems}>Buy Items</button>
    </div>
  )
}

const mapStateToProps =(state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIceCream

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())

    return {
        buyItems: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)