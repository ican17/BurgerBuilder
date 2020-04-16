import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

//action creators for the burgerBuilder
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingType: name,
    }
}
export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingType: name,
    }
}


const setIngredients = ingredients => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ings : ingredients
    }
}

const setIngredientsFailed = () => {
    return {
        type: actionTypes.SET_INGREDIENTS_FAILED,
    }
}
export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
        .then(res => {
            dispatch(setIngredients(res.data))
        })
        .catch(err => {
            dispatch(setIngredientsFailed());
        });

    }
}