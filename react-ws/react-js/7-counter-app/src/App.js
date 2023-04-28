import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BtnGen from './components/BtnGen';
import Product from './components/Product';
import CountDown from './components/CountDown';

var products = [
    { id:1024,name:'Laptop',price:486846,description:'Dell XPS I9' },
   { id:1025,name:'Laptop',price:8545568,description:'HP XPS I9' }
];

const App = () => {

  let numbers=[5,10,15,20,-5,-10,-20]
  const[totalCount,setTotalCount]=useState(0)
  const [resetCount, setResetCount] = useState(0);


  function totalHitCount(btnLable){
    setTotalCount(totalCount+btnLable)
  }

  function generateButtons(){
    return numbers.map((number,idx)=>{
      return(
        <div className='col-3 mt-2 text-center' key={idx}>
              <BtnGen resetCount={resetCount}    btnLable={number} hitsEvent={totalHitCount}/>
        </div>
       
      )
    })
   
  }

  /*
    map,find,filter,forEach
  */
 function renderProducts(){
    return products.map((product,idx)=>{
      return(
        <tr key={idx}>
          <Product prod={product}/>
        </tr>
      )
    })
 }

 


 const handleRefreshClick=()=>{
  setResetCount(resetCount + 1);
  setTotalCount(0)
 }
  return (
    <div className='container'>
      
      <h1>Counter APP</h1> <hr/>



    
     
      <div className='card'>
        <div className='card-header'>Counter APP</div>
        <div className='card-body'>
          <div className='card-text'>
          <div className='row'>
            <br/>
            <button onClick={handleRefreshClick} >Reset All</button>
            <hr/>
          {generateButtons()}
          </div>
        </div>
        

      </div>
     
      <div className='card-footer text-center'>
          <h1>Total Hit Counts: {totalCount}</h1>
        </div>
      </div>

      <hr/>

      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
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