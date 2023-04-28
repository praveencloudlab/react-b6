import React,{useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {

  const C1=()=>{

    useEffect(()=>{
      console.log("A");
    },[])

    console.log("B");

    return(
      <div>
          <C2/>
      </div>
     
    )
  }

  const C2=()=>{

    useEffect(()=>{
      console.log("C");
    },[])

    console.log("D");

    return(
     <div></div>
    )
  }

  function f1(){
    // normal f1 function
  }

  return (
    <div className='container'>

      

      <h1>APP Component</h1> <hr/>

      <C1/>

      <button onClick={function(){f1()}}></button>
      <button onClick={()=>f1()}></button>
      
      
    </div>
  );
};

export default App;