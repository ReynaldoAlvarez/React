import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('cliked hi button')
    }
    render() {
        return (
            <div>
                {/* for working with event dont' add parentheses */}
                <button onClick={this.clickHandler}>click me</button>
            </div>
        )
    }
}

export default ClassClick
