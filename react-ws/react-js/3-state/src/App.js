import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

     const[counter,setCounter]=useState(1)
     const[even,setEven]=useState()
     const[data,setData]=useState([10,54,32,45,98,54])
     const[employees,setEmployees]=useState([{id:10,name:'Praveen',ag:87},{id:10,name:'James',ag:97}])
     const[name,setName]=useState()

 let n=1;

  function f1(num){
    console.log(">>> num ",num);
    num=num+1;
  }

  function incrementNumber(){
    //---
    setCounter(counter+1)
    //---
  }

  return (
    <div className='container'>
      <h1>App Component</h1> <hr/>
     

      <button onClick={()=>f1(n)}>+</button> <br/>
      <button onClick={()=>setCounter(counter+1)}>+</button> <br/>
      <button onClick={()=>incrementNumber()}>+</button> <br/>

      <h1>Count: {n}</h1>
      <h1>Counter: {counter}</h1>
      <h1>Data: {data}</h1>
      <br/>
     
     <div>
      <label>Name</label>
      <input type='text' onBlur={(e)=>setName(e.target.value)}/>
     </div>

     <br/>
     <h1>Name: {name}</h1>

      <h1>
        {JSON.stringify(employees)}
      </h1>

    </div>
  );
};

export default App;