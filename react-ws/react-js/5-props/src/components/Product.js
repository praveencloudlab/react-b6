import React from 'react';

const Product = (props) => {
    return (
        <div>
            <h1>Product Component</h1> <hr/>

            <table className='table table-bordered'>
            <thead>
                     <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                   
                </tr>
                </thead>
                
                    <tbody>
                        <tr>
                             <td>{props.prod.id}</td>
                             <td>{props.prod.name}</td>
                             <td>{props.prod.price}</td>
                             <td>{props.prod.description}</td>
                        </tr>

                    </tbody>
               
            </table>

        </div>
    );
};

export default Product;