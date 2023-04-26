import React from 'react';
import {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Greet from './components/Greet';
import Product from './components/Product';
import StoryBox from './components/StoryBox';

const App = (props) => {

  let[greetMsg,setGreetMsg] =useState();
  let[name,setName]=useState()

  let product={id:1024,name:'Laptop',price:486846,description:'Dell XPS I9'}

   function toChildComponent(msg,e){
    console.log(e.target);
      setGreetMsg(msg);
      setName('Rudhira')

   }

  return (
    <div className='container'>
        <h1>{props.title}</h1> <hr/>
        
        <button onClick={()=>toChildComponent('Good Noon')}>Good Morning</button> <br/>
        <input type='text' onKeyUp={(e)=>setName(e.target.value)}/>

        <hr/>

        <Greet pname={name} msg={greetMsg} />

        <hr/>
        <Product prod={product}/>

        <hr/>
        <StoryBox storyTitle="React JS" author="James" type="ebook"/>




    </div>
  );
};

export default App;