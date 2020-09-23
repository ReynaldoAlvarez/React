import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
              count:0
        }
    }
    
    incrementCount(){
        /* this.state.count = this.state.count + 1
        console.log(this.state.count) */
        /* create a setState for change value in UI */
        this.setState({
            count: this.state.count + 1
        },
        ()=> console.log('callback value', this.state.count)
        )
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                counter-{this.state.count}
                <button onClick={ ()=> this.incrementCount()}>increment</button>
            </div>
        )
    }
}

export default Counter
