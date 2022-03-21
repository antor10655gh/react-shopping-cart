import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(json => setProducts(json));
    },[]);

    return (
        <div>
            <h1>Welcome To Daraz-<span style={{color: 'orange'}}>Mall</span></h1>
            <div className="products">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;