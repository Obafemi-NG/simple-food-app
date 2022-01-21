import React from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import styles from './header-cart-button.module.css';

const HeaderCartButton = () => {
    return(
        <button className = {styles.button} >
            <span className = {styles.icon} > <CartIcon /> </span>
            <span> Your Cart </span>
            <span className = {styles.badge} > 0 </span>
        </button>
    )
}
export default HeaderCartButton;