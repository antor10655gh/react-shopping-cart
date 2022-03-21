import React, { useEffect, useState } from 'react';
import { getTotal } from '../../Utilities/try';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(json => setProducts(json));
    },[]);

    const totalPrice = getTotal(products);

    return (
        <div>
            <h1>Welcome To Daraz-<span style={{color: 'orange'}}>Mall</span></h1>
            <h3>Total Price: {totalPrice}</h3>
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