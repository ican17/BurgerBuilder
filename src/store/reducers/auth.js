import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading : false,
    token : null,
    userId : null,
    error: null,
    authRedirectPath: '/'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
                error : action.error
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                loading: false,
                error : null,
                token : null,
                userId : null,

            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token : action.idToken,
                userId : action.localId,
                error : null,
                loading: false,
            }
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return{
                ...state,
                authRedirectPath : action.path
            }    
        default:
            return state;
    }
}

export default reducer;