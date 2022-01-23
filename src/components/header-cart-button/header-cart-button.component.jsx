import React, {useContext} from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartContext from '../../store/store.context';

import styles from './header-cart-button.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    // console.log(cartCtx);

    const numberOfItemsInCart = cartCtx.items.reduce((currentValue, item) => {
        console.log(currentValue, item)
        return currentValue + item.amount
        
    }, 0);
    // const numberOfItemsInCart = cartCtx.items.length;
    return(
        <button onClick = {props.onClick} className = {styles.button} >
            <span className = {styles.icon} > <CartIcon /> </span>
            <span> Your Cart </span>
            <span className = {styles.badge} > {numberOfItemsInCart} </span>
        </button>
    )
}
export default HeaderCartButton;