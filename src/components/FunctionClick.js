// snippet = rfce
import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('button cliked')
    }
    return (
        <div>
            {/* onClick={clickHandler () } add parentesis call funtion and run function  
                onClick={clickHandler} without parenteses wait for the envent click and next call function
            */}
          <button onClick={clickHandler}>click</button>  
        </div>
    )
}

export default FunctionClick
