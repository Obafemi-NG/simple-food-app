import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../cart-icon/cart-icon.component';
import CartContext from '../../store/store.context';

import styles from './header-cart-button.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [isItemAdded, setIsItemAdded] = useState(false)
    const {items} = cartCtx
    const numberOfItemsInCart = items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0);
    
    const btnClasses = `${styles.button} ${isItemAdded ? styles.bump : ''} `

    useEffect(() => {
        if(items.length === 0 ) {
            return;
        }
        setIsItemAdded(true);
        
        const timer = setTimeout(() => {
            setIsItemAdded(false);
        }, 300)

        return(() => {
            clearTimeout(timer)
        })
        
    }, [items])

    return(
        <button onClick = {props.onClick} className = {btnClasses} >
            <span className = {styles.icon} > <CartIcon /> </span>
            <span> Your Cart </span>
            <span className = {styles.badge} > {numberOfItemsInCart} </span>
        </button>
    )
}
export default HeaderCartButton;