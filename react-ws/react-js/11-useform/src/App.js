import React from 'react';
import { useForm } from "react-hook-form";
import {useMyHook}  from './hooks/useMyHook'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {

  const { register, handleSubmit,formState: { errors }} = useForm();
  //const{fun1,fun2,fun3}=useMyHook();
  const saveProduct = (product) => {
    console.log(product);
  }


  return (
    <div className='container'>

      <h1>React Hook Form</h1> <hr/>

      <form onSubmit={handleSubmit(saveProduct)}>
        <div>
          <input defaultValue="" {...register("productId",{ required: true,maxLength: 5 })} />
          {errors.productId?.type==='required' && <span className='text-danger'>Product is required</span>}
          {errors.productId?.type==='maxLength' && <span className='text-danger'>Product is Can not be more than 5 digits</span>}
        </div>
        <div>
          <input defaultValue="" {...register("productName")} />
        </div>
        <div>
          <input defaultValue="" {...register("price")} />
        </div>

        <div>
        <div>
            <button type='submit'>Save</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default App;