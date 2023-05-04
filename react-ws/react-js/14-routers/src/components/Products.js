import React,{useState,useEffect} from 'react';
import {getProducts} from '../api/products-service'
import ProductDetails from './ProductDetails';
const Products = () => {

    const[products,setProducts]=useState([])

    useEffect(()=>{
        getProducts()
        .then(products=>setProducts(products.data))
        .catch(error=>console.error(error))
    },[])

    const renderProducts =()=>{

       return products.map((product,idx)=>{
      
            return(
                <tr key={product.id}>
                    <ProductDetails prod={product} />
                </tr>
            )
        })
    }

    return (
        <div>

            <table className='table'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Action1</th>
                    <th>Action2</th>
                    </tr>
                </thead>

                <tbody>
                {renderProducts()}
                </tbody>
            </table>

           
        </div>
    );
};

export default Products;