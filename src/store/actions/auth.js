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
        })
        .catch(error => {
            console.log(error)
            dispatch(authFail(error))
        });
    }
}