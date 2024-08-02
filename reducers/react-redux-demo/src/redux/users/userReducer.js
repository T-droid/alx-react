import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
} from "./userActionTypes";


const initialState = {
    loading: false,
    userData: [],
    error: ''
}

const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                loading: true,
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                userData: action.payload,
                error: ''
            }

        case FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default: return state
    }
}

export default userReducer;