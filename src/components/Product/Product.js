import React from 'react';

const Product = (props) => {
    const {addToCart, product} = props;
    return (
        <div style={{border: '2px solid gray', margin:'auto', width:'50%', padding:'20px'}}>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product.id, product.name)}>Add to Cart</button>
        </div>
    );
};

export default Product;