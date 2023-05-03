import React from 'react';
import { useForm } from "react-hook-form";
import {saveProduct} from '../api/products-service'


const ProductForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        saveProduct(data)
        .then(response=>console.log(response.data))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <h1>Product Form</h1> <hr/>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Product ID</label>
                <input {...register("id", { required: true, maxLength: 20 })} />
            </div>
            <div>
                <label>Product Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} />
            </div>
            <div>
                <label>Product Price</label>
                <input {...register("price", { required: true, maxLength: 20 })} />
            </div>
            <div>
                <label>Product Description </label>
                <textarea {...register("description", { required: true, maxLength: 20 })} />
            </div>
    
      <input type="submit" />
      </form>
        </div>
    );
};

export default ProductForm;