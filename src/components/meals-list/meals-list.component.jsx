import { DUMMY_MEALS } from '../../data';
import Card from '../card/card.component';
import MealItem from '../meal-item/meal-item.component';
// import styles from './meals-list.module.css';

const MealsList = () => {
    const mealList = DUMMY_MEALS.map(meal => <MealItem key = {meal.id} name = {meal.name} description = {meal.description} price = {meal.price} /> )
    return(
        <Card>
            <ul>
                {mealList}
            </ul>
        </Card>
        
    )
};

export default MealsList;