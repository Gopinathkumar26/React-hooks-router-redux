import React, { Component } from 'react';

//Simple class side effect component with conditionally run effects

class ClassEffectCounterTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count)
        console.log('Updating document title')
        document.title = `Clicked ${this.state.count} times`
    }

  render() {
    return (
      <div>
        <input type='text' value={this.state.count} onChange={(e) => {this.setState({name: e.target.value})}}/>
        <button onClick={() => this.setState({count: this.state.count + 1})}>Click - {this.state.count}</button>
      </div>
    )
  }
}

export default ClassEffectCounterTwo;