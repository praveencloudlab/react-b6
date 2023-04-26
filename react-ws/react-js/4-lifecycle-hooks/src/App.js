import React from 'react';
import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Employee from './Employee';



const App = () => {

  const[counter,setCounter] =useState(1)
  const[even,setEven]=useState(2);

  useEffect(()=>{
    console.log("useEffect::even number incremented....");
  },[even])

  useEffect(()=>{
    console.log("useEffct::counter modified..");
  },[counter])

  useEffect(()=>{
    console.log("useEffect::even or counter");
  },[even,counter])
  
  //useEffect without any arguments, will always get executed upon every state change
  useEffect(()=>{
    console.log(">>> useEffect()");
  })

  //useEffect with blank array argument will execute only once in the life cycle
  useEffect(()=>{
    console.log(">>> useEffect() with array");
  },[])


  let empId = 1024;

// ui
  return (
    <div className='container'>

      <h1>App Component</h1> <hr/>

      <button onClick={()=>setCounter(counter+1)}>+</button> 
      <button onClick={()=>setEven(even+2)}>Even Increment</button>
      <h2>Counter: {counter} </h2>
      <h2>Even: {even}</h2>

      <hr/>


      {empId!=0?<Employee/>:null}
      
      
    </div>
  );
};

export default App;