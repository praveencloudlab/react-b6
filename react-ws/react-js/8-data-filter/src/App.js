import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.json'

const App = () => {
  const[searchTerm,setSearchTerm]=useState('')
  const[searchResults,setSearchResults]=useState(data)
  const[searchCriteria,setSearchCriteria]=useState('name')


  function renderEmployees(){
    return searchResults.map((employee,idx)=>{
      return(
        <tr key={idx}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.gender}</td>
        </tr>
      )
    })
  }

  const handleSearhChange=(e)=>{
   setSearchTerm(e.target.value)
   const results=data.filter(emp=>emp[searchCriteria].toString().toLowerCase().includes(e.target.value.toLowerCase()))
   setSearchResults(results)
  }

  const handleSelect=(e)=>{
//console.log(e.target.value);
    setSearchCriteria(e.target.value)
  }

  return (
    <div className='container'>

      <h1>Employee APP</h1> <hr/>

      <select onChange={handleSelect}>
        <option value='id'>By ID</option>
        <option value='name' defaultChecked>By Name</option>
        <option value='email'>By Email</option>
        <option value='gender'>By Gender</option>
      </select>

      <input placeholder='Filter data' value={searchTerm} onChange={handleSearhChange}/>

      <table className='table table-hover'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
        {renderEmployees()}
        </tbody>
      </table>
      
      
    </div>
  );
};

export default App;