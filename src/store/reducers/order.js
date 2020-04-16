import * as actionTypes from '../actions/actionTypes';
const initialState = {
    orders: [],
    loading: false,
    purshased: false
}
 const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURSHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                purshased: true,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PURSHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.PURSHASE_BURGER_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.PURSHASE_INIT:
            return {
                ...state,
                purshased: false,
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_ORDERS_FAILED:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false,
            };

        default:
            return state;
    }
}

export default reducer;