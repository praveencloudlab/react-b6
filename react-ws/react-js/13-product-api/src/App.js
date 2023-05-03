import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ProductForm from './components/Product-Form';


const App = () => {
  return (
    <div className='container'>
      <h1>eCart APP</h1> <hr/>
      <ProductForm/>
      
    </div>
  );
};

export default App;