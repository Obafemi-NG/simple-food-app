import React from 'react';
import CustomInput from '../custom-input/custom-input.component';
import styles from './meal-item-form.module.css';

const MealItemForm = (props) => {
    return(
        <div className = {styles.form} >
            <CustomInput 
            label = 'Amount' input = {{
                id : `amount_ ${props.id}`,
                type : 'number',
                min : '0',
                max : '10',
                step : '1',
                defaultValue : '0',
            }} />
            <button>+ Add </button>
        </div>

    )
}

export default MealItemForm;