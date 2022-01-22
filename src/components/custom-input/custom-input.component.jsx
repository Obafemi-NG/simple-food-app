import React from 'react';
import styles from './custom-input.module.css';

const CustomInput = (props) => {
    return (
        <div className = {styles.input} >
            <label > {props.label} </label>
            <input  {...props.input} />
        </div>
    )
}

export default CustomInput;