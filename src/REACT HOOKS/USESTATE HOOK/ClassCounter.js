import React, { Component } from 'react';

class ClassCounter extends Component {       //Simple Class component using setState fn
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    // incrementCount = () => {
    //     this.setState({
    //         count:this.state.count + 1
    //     })
    // }

    incrementCount = () => {
            this.setState(prevState => {
                return {
                 count:prevState.count + 1
                }
            })
   }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count - {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter;