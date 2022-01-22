import React from 'react';
import MealItemForm from '../meal-item-form/meal-item-form.component';
import styles from './meal-item.module.css';

const MealItem = props => {
    const price =  `$${props.price}`;

    return(
        <div className = {styles.meal}>
            <div key = {props.id} >
                <h3>
                    {props.name}
                </h3>
                <p className = {styles.description} >
                    {props.description}
                </p>
                <div className = {styles.price} >
                    {price}
                </div>
            </div>
            <div>
                <MealItemForm id = {props.id} />
            </div>
        </div>
    )
}

export default MealItem;