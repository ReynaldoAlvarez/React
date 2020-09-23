import React from 'react';
import './App.css';

/* import components */
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponents from './components/ParentComponents';

function App() {
  return (
    <div className="App">
      {/* incluimos los componentes dentro de APP */}
      
    <ParentComponents />

    {/*   
    <Counter /> 
    <Message></Message> */}
      {/* <Greet name='israel' heroName='Pueblo de Dios'><p>this is mesage props children</p></Greet>
      <Greet name='lucia' heroName='Excelencia Academica'><button>Action</button></Greet>
      <Greet name='vidal' heroName='Soñador'/>
      <hr/>
      <Greet name='vidal' heroName='Soñador'/>
      <Welcome name='simon' heroName='pedro'></Welcome>
      <Welcome name='saulo' heroName='pablo'></Welcome>
      <hr/>
      <Hello></Hello> 
      <FunctionClick />
      <ClassClick />
      <EventBind />
      */}
    </div>
  );
}

export default App;
