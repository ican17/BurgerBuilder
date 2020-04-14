import * as actionTypes from './actions';

const INGREDIENTS_PRICES = {
    salad: 10,
    meat: 45,
    cheese: 20
}

const initialState = {
    ingredients: {
        cheese: 0,
        meat: 0,
        salad: 0,
    },
    totalPrice: 0,

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
        case actionTypes.RESET:
            return {
                ingredients: {
                    cheese: 0,
                    meat: 0,
                    salad: 0,
                },
                totalPrice: 0,

            }

        default:
            return state;
    }
}

export default reducer;