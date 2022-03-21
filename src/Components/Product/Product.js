import React from 'react';
import { addCart } from '../../Utilities/try';
import './Product.css'

const Product = (props) => {
    const {id, name, color, price} = props.product;

    const addToCart=(id)=> {
        let shoppingCart;
        const storedCart = localStorage.getItem('shopping-cart');
        if(storedCart){
            shoppingCart = JSON.parse(storedCart);
        }
        else{
            shoppingCart = {};
        }

        const quantity = shoppingCart[id];
        if(quantity){
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        }
        else{
            shoppingCart[id] = 1;
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
    return (
        <div className='product'>
            <h1>{name}</h1>
            <p><span style={{color: 'orange'}}>Color: </span>{color}</p>
            <p><span style={{color: 'orange'}}>Price: </span>{price}$</p>
            <button onClick={()=> addToCart(id)}>Add To Cart</button>
        </div>
    );
};

export default Product;