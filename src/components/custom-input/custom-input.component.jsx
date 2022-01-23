import React from 'react';
import styles from './custom-input.module.css';

const CustomInput = React.forwardRef((props, ref) => {
    return (
        <div className = {styles.input} >
            <label > {props.label} </label>
            <input ref = {ref}  {...props.input} />
        </div>
    )
})

export default CustomInput;