import React, {Component} from 'react';

/* class Welcome  extends Component{
    render(){
    return(<h1>Class Component - WELCOME {this.props.name} iqual {this.props.heroName}</h1>);
    }
} */

// 2. Destructuring props

class Welcome extends Component{
    render(){
        const {name, heroName}=this.props;
        return(
            <div>
                <h1>Class Component - WELCOME {name} = {heroName}</h1>
            </div>
        )
    }
}
export default Welcome;