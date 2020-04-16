import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

const purshaseBurgerStart = () => {
    return {
        type : actionTypes.PURSHASE_BURGER_START
    }
}
const purshaseOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURSHASE_BURGER_SUCCESS,
        orderId : id,
        orderData : orderData
    }
}
const purshaseOrderFailed = (error) => {
    return {
        type: actionTypes.PURSHASE_BURGER_FAILED,
        error : error,
    }
}

export const purshaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purshaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(res => {
                dispatch(purshaseOrderSuccess(res.data.name, orderData))
            })
            .catch(err => dispatch(purshaseOrderFailed(err)));
    }
}

export const purshaseInit = () => {
    return {
        type: actionTypes.PURSHASE_INIT
    }
}

const fetchOrderSuccess = (orders)=>{
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}
const fetchOrderFailed = (error)=>{
    return {
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    }
}
const fetchOrderStart = ()=>{
    return {
        type: actionTypes.FETCH_ORDERS_START,
    }
}
export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrderStart());
        axios.get('orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (const key in res.data) {
                if (res.data.hasOwnProperty(key)) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id : key
                    })
                }
            }
           dispatch(fetchOrderSuccess(fetchedOrders))
        })
        .catch(err => {
            dispatch(fetchOrderFailed())
        });
    }
}