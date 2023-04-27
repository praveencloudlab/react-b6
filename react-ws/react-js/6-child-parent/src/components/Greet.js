import React from 'react';

const Greet = ({greetMsg,childEvent}) => {

    function handleGreetMessage (msg){
        console.log('child component::handleGreetMessage function');
        childEvent(greetMsg)// invokes function assigned in parent component

    }
    return (
        <div>
        <div className='card'>
          <div className='card-header'>Greet Component</div>
          <div className='card-body'>
            <div className='card-content'>
              <h1>Greet Component</h1>
              <hr/>
              <h2>{greetMsg}</h2>
              
              <button className='btn-space' onClick={()=>handleGreetMessage()}>Greet Back</button>

            </div>
          </div>
        </div>
      </div>
    );
};

export default Greet;