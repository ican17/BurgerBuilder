import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';

function Burger(props) {
   // console.log(props.ingredients)
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        const length =props.ingredients[igKey];
        return [...Array(length)].map((_,i)=> {
            return <BurgerIngredient key={igKey + i} type={igKey}  />
        });
    })
    .reduce((arr, el) =>{
        return arr.concat(el);
    },[]);
    if(transformedIngredients.length===0){
        transformedIngredients = <p>Please, start adding some ingredients here...</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;