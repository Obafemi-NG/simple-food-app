import React from 'react';
import styles from './cart.module.css';
import Modal from '../modal/modal.component';

const Cart = () => {
    const cartItems = [{id : 'ca1', name : 'sushi', amount : 5, price : 35.75}].map(cartItem => {
        return(
            <ul className = {styles['cart-items']}>
                <li>
                {cartItem.name}
                </li>
            </ul>
        )

    })
    return(
        <Modal>
            {cartItems}
            <div>
                <span className = {styles.total} >Total Amount</span>
                <span>35.75</span>
            </div>
            <div className = {styles.actions}>
                <button className = {styles['button--alt']} >
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