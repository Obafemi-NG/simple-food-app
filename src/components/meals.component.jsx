import { Fragment } from "react";
import MealsList from "./meals-list/meals-list.component";
import MealsSummary from "./meals-summary/meals-summary.component";

const Meals = () => {
    return(
        <Fragment>
            <MealsSummary/>
            <MealsList/>
        </Fragment>
    )
}

export default Meals;