import React from 'react';
import { addCart, removeCart } from '../../Utilities/try';
import './Product.css'

const Product = (props) => {
    const {id, name, color, price} = props.product;

    const addToCart=(id)=> {
        addCart(id);
    }

    const removeFromCart = (id) =>{
        removeCart(id);
    }

    return (
        <div className='product'>
            <h1>{name}</h1>
            <p><span style={{color: 'orange'}}>Color: </span>{color}</p>
            <p><span style={{color: 'orange'}}>Price: </span>{price}$</p>
            <button onClick={()=> addToCart(id)}>Add To Cart</button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Product;