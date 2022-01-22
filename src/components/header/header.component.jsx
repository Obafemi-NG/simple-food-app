import React from 'react';
import styles from './header.module.css';
import mealsImg from '../../assets/meals.jpg';

import HeaderCartButton from '../header-cart-button/header-cart-button.component';


const Header = () => {
    return(
        <React.Fragment>
            <header className = {styles.header} >
                <h2  >
                    DM FoodApp
                </h2>
                <HeaderCartButton/>
            </header>
            <div className = {styles['main-image']} >
                <img src = {mealsImg} alt = 'A delicious meal for display' />
            </div>
        </React.Fragment>
    )
}
export default Header;