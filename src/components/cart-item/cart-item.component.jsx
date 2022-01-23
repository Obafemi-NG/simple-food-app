import React from 'react';
import styles from './cart-item.module.css'

const CartItem = (props) => {
    const price =  `$${props.price}`
    return(
        <li className = {styles['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className = {styles.summary}>
                    <span className = {styles.price} >{price}</span>
                    <span className = {styles.amount} >{props.amount}</span>
                </div>
                <div className = {styles.actions}>
                    <button onClick = {props.onRemove}> - </button>
                    <button onClick = {props.onAdd}> + </button>
                </div>
            </div>
        </li>
    )
};
export default CartItem;