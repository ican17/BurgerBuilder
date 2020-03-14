import React from 'react';
import PropTypes from 'prop-types';

import classes from '../BurgerIngredient/BurgerIngredient.module.css';
import BurgerBuilder from '../../../containers/BurgerBuilder/BurgerBuilder';

function BurgerIngredient(props) {
    let ingredient = null;
    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case 'bread-top':
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>);
            break;
        case 'meat':
            ingredient = <div className={classes.Meat}></div>;
            break;
        case 'cheese':
            ingredient = <div className={classes.Cheese}></div>;
            break;
        case 'salad':
            ingredient = <div className={classes.Salad}></div>;
            break;
        default:
            ingredient = null;
            break;
    }
    return ingredient;
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredient;