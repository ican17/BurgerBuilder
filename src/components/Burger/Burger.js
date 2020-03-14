import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

function Burger(props) {
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        const length =props.ingredients[igKey];
        return [...Array(length)].map((_,i)=> {
            return <BurgerIngredient key={igKey + i} type={igKey}  />
        });
    });

    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;