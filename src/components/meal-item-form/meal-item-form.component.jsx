import {useRef, useState} from 'react';
import CustomInput from '../custom-input/custom-input.component';
import styles from './meal-item-form.module.css';


const MealItemForm = (props) => {
    const [isInputValid, setIsInputValid] = useState(true);

    const amountInputRef = useRef();

    const submitFormHandler = (e) => {
        e.preventDefault();
        const enteredValue = amountInputRef.current.value;
        const enteredValueNumber = +enteredValue;
        console.log(enteredValueNumber)

        if (enteredValue.trim().length === 0 || enteredValueNumber < 0 || enteredValueNumber > 10) {
            setIsInputValid(false);
            return;
        }

        props.onAddItem(enteredValueNumber);
    }
    return(
        <form className = {styles.form} onSubmit = {submitFormHandler} >
            <CustomInput 
            ref = {amountInputRef}
            label = 'Amount' input = {{
                id : `amount_ ${props.id}`,
                type : 'number',
                min : '0',
                max : '10',
                step : '1',
                defaultValue : '0',
            }} />
            <button > + Add </button>
            {!isInputValid && <p>Please enter a valid number between 1 - 10</p> }
        </form>

    )
}

export default MealItemForm;