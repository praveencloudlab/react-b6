import axios from 'axios';

const apiUrl='http://localhost:3000';

export const getProducts=()=>{
    return axios.get(`${apiUrl}/products`);
}

export const saveProduct=(product)=>{
    return axios.post(`${apiUrl}/products`,product)
}   

export const findById=(productId)=>{
    return axios.get(`${apiUrl}/products/${productId}`)
}

export const findByName=(name)=>{
    return axios.get(`${apiUrl}/products?name=${name}`)
}

export const deleteProduct=(productId)=>{
    return axios.delete(`${apiUrl}/products/${productId}`);
}

export const updateProduct=(product)=>{
    return axios.put(`${apiUrl}/products/product`,product)
}


