import React,{useEffect,useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {

  const[products,setProducts]=useState({})

  useEffect(()=>{
    /*
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products=>{
      console.log(products);
    })
    */

    axios.get('http://localhost:3000/products')
    .then(products=>setProducts(products.data));
  },[])

  const renderProducts=()=>{
    return products.map((product,idx)=>{
      return(
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.description}</td>
        </tr>
      )
    })
  }
  return (
    <div className='container'>

      <h1>Axios Demo</h1> <hr/>

      <table>
        
          <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {renderProducts()}
          </tbody>
        
      </table>
      
    </div>
  );
};

export default App;