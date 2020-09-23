import React from 'react';

/* function Greet(){
    return <h1>Hello Vidal Reynaldo</h1>
} */
/* const Greet= (props)=>{
    console.log(props);
return (
    <div>
        <h1>Hi {props.name}, you are {props.heroName}</h1>
        {props.children}
    </div>
    )
}

export default Greet; */

/* 2. TASK 12 DESTRUCTURING */

const Greet = (props)=>{
    const {name, heroName}=props;
    return(
        <div>
            <h1>Hi {name}, you are a {heroName}</h1>
        </div>
    )

}

export default Greet;
