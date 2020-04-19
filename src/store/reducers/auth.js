import * as actionTypes from '../actions/actionTypes';

const initialState = {
    loading : false,
    authData : null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                loading: true,
            }
            break;
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                authData : action.authData,
                loading: false,
            }
    
        default:
            return state;
    }
}

export default reducer;