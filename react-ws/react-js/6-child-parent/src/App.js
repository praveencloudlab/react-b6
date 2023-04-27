import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';
const App = () => {
  const[greetMsg,setGreetMsg] =useState()
  const[childMsg,setChildMsg] =useState()

  function childMessage(msg){
    console.log('Parent::child message function..');
    setChildMsg(msg+' too!')
  }
  return (
    <div className='container'>

      <div className='alert alert-info text-center'>
        <h1>Component Comminication Demo</h1>
      </div>

      <br/>

      <div>
        <div className='card'>
          <div className='card-header'>APP Component</div>
          <div className='card-body'>
            <div className='card-content'>
              <h1>App Component</h1>
              <hr/>
              <button className='btn-space' onClick={()=>setGreetMsg('Good Morning')}>Good Morning</button>
              <button className='btn-space' onClick={()=>setGreetMsg('Good Noon')}>Good Noon</button>
              <button className='btn-space' onClick={()=>setGreetMsg('Good Evening')}>Good Evening</button>

              <hr/>
              <h2>{childMsg}</h2>

            </div>
          </div>
        </div>
      </div>


   <br/>
      <Greet greetMsg={greetMsg} childEvent={childMessage}/>

    </div>
  );
};

export default App;