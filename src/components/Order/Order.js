import React from 'react';
import classes from './Order.module.css'; 

function Order(props) {
    const ingredients = [];
    for (const key in props.ingredients) {
        if (props.ingredients.hasOwnProperty(key)) {
            ingredients.push({
                name: key,
                amount : props.ingredients[key] 
            })
        }
    }

    const ingredientsOutput = ingredients.map(ig => {
    return <span key={ig.name} 
    style={{
        textTransform : 'capitalize',
        display:'inline-block',
        margin: '0 8px',
        border: '1px solid grey',
        padding: '5px'
    }}>{ig.name}({ig.amount})</span>
    });
    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>{props.price} DZD</strong></p>
        </div>
    )
}

export default Order;
