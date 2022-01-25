import React, {useReducer} from 'react';
import CartContext from './store.context';

const defaultCartState = {
    items : [],
    totalAmount : 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

            const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
            const existingCartItem = state.items[existingCartItemIndex];
            let updatedItems;
            
            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount : existingCartItem.amount + action.item.amount,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item) ;
            }
            
            return {
                ...state,
                items : updatedItems,
                totalAmount : updatedTotalAmount
            };
        case 'REMOVE_ITEM' :
            const existingItemIndex = state.items.findIndex(item => item.id === action.id);
            const existingItemToRemove = state.items[existingItemIndex];
            const updatedTotalAmountForRemoval = state.totalAmount - existingItemToRemove.price;
            let updatedItemsAfterRemoval;
            if(existingItemToRemove.amount === 1) {
                updatedItemsAfterRemoval = state.items.filter(item => item.id !== action.id)
            } else if(existingItemToRemove.amount > 1) {
                const updatedItemAfterRemoval = {...existingItemToRemove, amount : existingItemToRemove.amount - 1 };
                updatedItemsAfterRemoval = [...state.items];
                updatedItemsAfterRemoval[existingItemIndex] = updatedItemAfterRemoval;
            }
            return({
                ...state,
                items : updatedItemsAfterRemoval,
                totalAmount : updatedTotalAmountForRemoval
            });
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