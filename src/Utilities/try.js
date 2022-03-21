const addCart =(id) =>{
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

const removeCart = (id) =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const getTotalPrice = products =>{
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer,0);
    return total;
}

export {
    addCart, 
    removeCart,
    getTotalPrice as getTotal
}