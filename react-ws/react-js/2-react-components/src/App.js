import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greet from './Greet';
import Box from './Box';
const App = () => {
  return (
    <div className='container'>
      <h1>App Component</h1> <hr/>
 
      <Greet/>
      <Box/>
     

    </div>
  );
};

export default App;