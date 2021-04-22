import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const { products, addToCart} = props;
    console.log(props)
    return (
        <div>
            <h2>
                This is shop
                {
                    products.map(product => <Product
                         product ={product}
                         addToCart={addToCart}
                         ></Product> )
                }
            </h2>
        </div>
    );
};
const mapStateToProps = state =>{
    return{
        cart: state.cart, 
        products: state.products
    }
}
const mapDispatchToProps = {
    addToCart: addToCart
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop);