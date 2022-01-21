import React from 'react';
import styles from './header.module.css';
import mealsImg from '../../assets/meals.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import CartIcon from '../cart-icon/cart-icon.component';
import HeaderCartButton from '../header-cart-button/header-cart-button.component';


// const Header = () => {
//     return (
//         <div className = {styles.header}>
//             <h2 className = {styles.title} >
//                 DM FoodApp
//             </h2>
//             <div className = {styles.cartContainer} >
//                 <FontAwesomeIcon icon={faCartPlus} />
//                 {/* <CartIcon /> */}
//                 <p className= {styles.cart} >
//                 Your Cart 
//                 </p>
//                 <div className = {styles.cartItem} >
//                     0
//                 </div>
//             </div>
//         </div>
//     )
// }

const Header = () => {
    return(
        <React.Fragment>
            <header className = {styles.header} >
                <h2  >
                    DM FoodApp
                </h2>
                {/* <button className = {styles.button} >
                    Your Cart
                </button> */}
                <HeaderCartButton/>
            </header>
            <div className = {styles['main-image']} >
                <img src = {mealsImg} alt = 'A delicious meal for display' />
            </div>
        </React.Fragment>
    )
}
export default Header;