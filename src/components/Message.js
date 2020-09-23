/* STATES */
import React, {Component} from 'react';

class Message  extends Component{

    /* 1 ccreate a CONSTRUCTOR */
    constructor(){
        /* 2 create a call super mthod */
        super()
            /* 3 create a state object */
        this.state = {
            message:'welcome visitator'
        }
        
    }

    changeMessage(){
        this.setState({
            message:'thanks you for suscribing'
        })
    }
    render(){
        return(
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
        </div>
        );
    }
}

export default Message;