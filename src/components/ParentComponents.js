// task: Methods as props - 
//solucionares el problema del caso en que 
//el COMPONENTE SECUNDARIO QUIERACOMUNICARSE CON EL COMPONENTE PADRE
// PARA ESO PASAREMOS UNA REFERENCIA A UN METHOD como propos al componente hijo
import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponents  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             // 1 establecemos un estado llamado Padre
             parentName: 'Parent'
        }
        this.greetparent  = this.greetparent.bind(this) 
    }
    // 2 definimos un metodo saludar a los padres
    // 3. pasaremos el metodo en si mismo al componente Hijo ChildComponent 
    greetparent(ChildName){
        //alert('hola' + this.state.parentName)
        // use ES6
        alert(`HELLO ${this.state.parentName} from ${ChildName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler = {this.greetparent}/>
            </div>
        )
    }
}

export default ParentComponents;
