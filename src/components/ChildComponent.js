import React from 'react'

function ChildComponent(props) {
    return (
        <div>
           
            {/* <button onClick={props.greetHandler}>GREET PARENT </button> */}
             {/* para que pasemos parametros hacemos uso de la funcion flecha */}

             <button onClick={()=>props.greetHandler('child')}>GREET PARENT </button>
        </div>
    )
}

export default ChildComponent
