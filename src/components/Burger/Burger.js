import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

function Burger(props) {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="salad" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="cheese" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;