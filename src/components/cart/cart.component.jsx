import React from 'react';
import styles from './cart.module.css';
import Modal from '../modal/modal.component';

const Cart = (props) => {
    const cartItems = [{id : 'ca1', name : 'sushi', amount : 5, price : 35.75}].map(cartItem => {
        return(
            <ul className = {styles['cart-items']} key = {cartItem.id}>
                <li>
                {cartItem.name.toUpperCase()}
                </li>
            </ul>
        )

    })
    return(
        <Modal onClick = {props.onClose}>
            {cartItems}
            <div className = {styles.total} >
                <span>Total Amount</span>
                <span>35.75</span>
            </div>
            <div className = {styles.actions}>
                <button onClick = {props.onClose} className = {styles['button--alt']} >
                    Close
                </button>
                <button className = {styles.button} >
                    Place Order
                </button>
            </div>
        </Modal>
    )
}

export default Cart;