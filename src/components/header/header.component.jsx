import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className = {styles.header}>
            <h2 className = {styles.title} >
                DM FoodApp
            </h2>
            <div className = {styles.cartContainer} >
                <FontAwesomeIcon icon={faCartPlus} />
                <p className= {styles.cart} >
                Your Cart 
                </p>
                <div className = {styles.cartItem} >
                    0
                </div>
            </div>
        </div>
    )
}
export default Header;