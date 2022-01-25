import React, {useContext} from 'react';
import styles from './cart.module.css';
import Modal from '../modal/modal.component';
import CartContext from '../../store/store.context';
import CartItem from '../cart-item/cart-item.component';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    
    const addItemToCart = (item) => {
        cartCtx.addItem({...item, amount : 1})
    };
    const removeItemFromCart = (id) => {
        cartCtx.removeItem(id)
    };

    const cartItems = cartCtx.items.map(cartItem => <CartItem 
        key = {cartItem.id} 
        name = {cartItem.name} price = {cartItem.price} amount = {cartItem.amount}
        onAdd = {addItemToCart.bind(null, cartItem)}
        onRemove = {removeItemFromCart.bind(null, cartItem.id)} />);

    const cartHasItem = cartItems.length > 0;
    
    return(
        <Modal onClick = {props.onClose}>
            <div className = {styles['cart-items']} >
            {cartItems}
            <div className = {styles.total} >
                <span>Total Amount</span>
                <span> {totalAmount} </span>
            </div>
            <div className = {styles.actions}>
                <button onClick = {props.onClose} className = {styles['button--alt']} >
                    Close
                </button>
                {cartHasItem && <button className = {styles.button} >
                    Place Order
                </button>}
            </div>
            </div>

        </Modal>
    )
}

export default Cart;