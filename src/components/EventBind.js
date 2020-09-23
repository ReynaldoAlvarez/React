// * tema :  Binding Event Handlers - vicular controladores de eventos en componentes de React
import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hello'
        }
    }
   /*  clickHandler(){
        this.setState({
            message:'GoodBye'
        })
        console.log(this);
    } */

    // propiuedades de classe con arrow function
    clickHandler = ()=>{
        this.setState({
            message:'Good bye'
        })
        console.log(this);
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>clicK</button> */}
               {/*  <button onClick={ ()=>this.clickHandler()}>clicK</button> */}
               <button onClick={this.clickHandler}>clicK</button> 
            </div>
        )  
    }
}

export default EventBind
