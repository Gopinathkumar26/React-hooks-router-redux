import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from './iceCreamActions';

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of icecream - {props.numOfIceCream}</h2>
        <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        // numOfIceCream: state.numOfIceCream     (include icecream beacause of rootreducer)
        numOfIceCream: state.icecream.numOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)