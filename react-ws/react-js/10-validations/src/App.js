import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {

  const[user,setUser]=useState({})

  const[errors,setErrors] = useState({})
  const[isSubmited,setIsSubmited] = useState(false)

  const handleChange=(e)=>{

    const formErrors={...errors}
    const{name,value}=e.target;

     // validations ...
     if(!value){
      formErrors[name]=`${name} is required`
    }else{
      delete formErrors[name]
    }

    setUser({...user,[name]:value})
    setErrors(formErrors);



  }

  const handleSubmit=(e)=>{
   
    e.preventDefault();


    const formErrors={...errors}

    if(!user.firstName){
      formErrors.firstName='First Name is required'
    }

    if(!user.age){
      formErrors.age='Age is required'
    }
    

    if(!user.email){
      formErrors.email='Email is required'
    }
    
    setErrors(formErrors)

  if(Object.keys(formErrors).length > 0){
    console.log('errors. form not submitted');
   
  }else{
    console.log('Form is submitted');
    console.log(user);
  }
  }

  return (
    <div className='container'>

      <h1>Form Validation</h1> <hr/>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Provide Name:</label>
          <input name="firstName" onChange={handleChange}/>
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>

        <div>
          <label>Age:</label>
          <input name="age" onChange={handleChange}/>
          {errors.age && <span>{errors.age}</span>}

        </div>
        <div>
          <label>Provide Email:</label>
          <input name="email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}

        </div>

        <div>
          <button>Submit</button>
        </div>
      </form>

      <hr/>

      {user.firstName?
      <h2> Name: {user.firstName} </h2>
      : null
      }

      
    </div>
  );
};

export default App;