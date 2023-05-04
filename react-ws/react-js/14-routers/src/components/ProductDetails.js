import React from 'react';
import { Link } from 'react-router-dom';

const ProductDetails = (props) => {
   const product=props.prod; 
    return (
        <>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td><Link to={`/addproduct/${product.id}`}><button>Edit</button></Link> </td>
            <td><button>Delete</button></td>
        </>
    );
};

export default ProductDetails;