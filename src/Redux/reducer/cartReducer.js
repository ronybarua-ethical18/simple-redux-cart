import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState ={
    cart: [],
    products: [
        {name:'Samsung Mobile', id:1},
        {name:'Huawei Mobile', id:2},
        {name:'IPhone Mobile', id:3},
        {name:'Vivo Mobile', id:4},
        {name:'Oppo Mobile', id:5}
    ]
}
const cartReducer = (state = initialState, action) =>{
    console.log(action);
    switch (action.type) {
        case ADD_TO_CART:
            const newItem  = {
                productId:action.id,
                name:action.name,
                cartId:state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]
            return{
               ...state, cart:newCart
            }
        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return{...state, cart: remainingCart}
        default:
           return state;
    }
}
export default cartReducer;