import * as actionTypes from './actionTypes';
import axios from 'axios';

const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
const authSuccess = (idToken, localId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken : idToken,
        localId: localId
    }
}
const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error : error
    }
}
const logout = () => {
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

// async call logout after token expires
const logoutOnTokenExpires = (timer) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(logout());
        }, timer * 1000);
    }
    
}
// async call on firbase authentication system
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());

        const url = isSignup? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBnRsGgrFUu5KcrpDPP7wVNMKUFuG3jTeE
        `: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBnRsGgrFUu5KcrpDPP7wVNMKUFuG3jTeE`;

        axios.post(url,{
            email: email,
            password: password,
            returnSecureToken : true
        })
        .then(res =>{
            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(logoutOnTokenExpires(res.data.expiresIn));
        })
        .catch(error => {
            dispatch(authFail(error.response.data.error))
        });
    }
}