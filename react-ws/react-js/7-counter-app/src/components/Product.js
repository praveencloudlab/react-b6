import React from 'react';

const Product = ({prod}) => {
    return (
       <>

            <td>{prod.id}</td>
            <td>{prod.name}</td>
            <td>{prod.price}</td>
            <td>{prod.description}</td>
            </>
    );
};

export default Product;