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
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
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
            const date = new Date(Date.now() + (res.data.expiresIn * 1000));
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('userId', res.data.localId);
            localStorage.setItem('expirationDate',  date );

            dispatch(authSuccess(res.data.idToken, res.data.localId));
            dispatch(logoutOnTokenExpires(res.data.expiresIn));
        })
        .catch(error => {
            dispatch(authFail(error.response.data.error))
        });
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{ // the user is authenticated
            const userId = localStorage.getItem('userId');
            const expirationDate = localStorage.getItem('expirationDate');
            if(expirationDate <= new Date()){
                dispatch(logout());
            }else{
                dispatch(authSuccess(token, userId));
                dispatch(logoutOnTokenExpires((Date.parse(expirationDate) - Date.now())/1000));
            }
           
        }
    }
}