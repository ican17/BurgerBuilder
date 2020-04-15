import * as actionTypes from '../actions/actionTypes';

const INGREDIENTS_PRICES = {
    salad: 10,
    meat: 45,
    cheese: 20
}

const initialState = {
    ingredients: null,
    totalPrice: 0,
    error: false

};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENTS_PRICES[action.ingType]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENTS_PRICES[action.ingType]
            }
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ings.salad,
                    meat: action.ings.meat,
                    cheese: action.ings.cheese
                },
                error: false
            }
        case actionTypes.SET_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true,
            }
        case actionTypes.RESET:
            return {
                ingredients:{},
                totalPrice: 0,

            }

        default:
            return state;
    }
}

export default reducer;