import React,{useEffect,useState} from 'react';
import { useForm } from "react-hook-form";
import {saveProduct,findById,updateProduct} from '../api/products-service'
import { Navigate, useNavigate } from 'react-router-dom';
import {useParams} from 'react-router-dom'


const ProductForm = () => {
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate();
    const{productId}=useParams()
    const[product,setProduct]=useState({})
    console.log('PRODUCT ID',productId);


     useEffect(()=>{
        if(productId){
            console.log(">>> setting up "+productId);
            findById(productId)
            .then(product=>setProduct(product.data));
        }
     },[])

    const onSubmit = data => {
        console.log(">>> submitting ...");
        if(productId){ // edit product
          
            updateProduct(data,productId)
            .then(updatedProduct=>console.log(updatedProduct.data))
            .catch(error=>console.log(error))
            navigate('/products')


        }else{ // create new product
            saveProduct(data)
            .then(products=>console.log(products.data))
            .catch(error=>console.log(error))
            navigate('/products')
        }
       

       
    }
    return (
        <div>
            <h1>Product Form</h1> <hr/>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Product ID</label>
                <input {...register("id")} defaultValue={product.id} disabled={productId} />
            </div>
            <div>
                <label>Product Name</label>
                <input {...register("name", { required: true})} defaultValue={product.name} />
            </div>
            <div>
                <label>Product Price</label>
                <input {...register("price", { required: true }) } defaultValue={product.price} />
            </div>
            <div>
                <label>Product Description </label>
                <textarea {...register("description", { required: true})} defaultValue={product.description} />
            </div>
    
          {productId?<button>Edit</button>:<button>Save</button>} 
      </form>
        </div>
    );
};

export default ProductForm;