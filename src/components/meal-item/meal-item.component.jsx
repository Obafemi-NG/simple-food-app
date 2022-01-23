import {useContext} from 'react';
import MealItemForm from '../meal-item-form/meal-item-form.component';
import styles from './meal-item.module.css';
import CartContext from '../../store/store.context';

const MealItem = props => {
    const ctx = useContext(CartContext);
    const price =  `$${props.price}`;

    const addItemHandler = (amount) => {
        ctx.addItem({
            id : props.id,
            amount : amount,
            price : props.price,
            name : props.name,
            description : props.description
        })
    }
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
                <MealItemForm onAddItem = {addItemHandler} id = {props.id} />
            </div>
        </div>
    )
}

export default MealItem;