import React, {useReducer} from 'react';
import CartContext from './store.context';

const defaultCartState = {
    items : [],
    totalAmount : 0,
}
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            const updatedItem = state.items.concat(action.item) ;
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            return {
                ...state,
                items : updatedItem,
                totalAmount : updatedTotalAmount
            };
        default : return state;
    }
}

const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const addItemToCart = (item) => {
        dispatchCart({
            type : 'ADD_ITEM',
            item : item
        })
    };

    const removeItemFromCart = (id) => {
        dispatchCart({
            type : 'REMOVE_ITEM',
            id: id
        })
    };

    return(
        <CartContext.Provider value = {{
            items : cartState.items,
            totalAmount : cartState.totalAmount,
            addItem : addItemToCart ,
            removeItem : removeItemFromCart,
        }} >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;