import { 
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR
} from "./userActionTypes";
import axios from 'axios';


export const fetchUsers = () => {
    return {
        type: FETCH_USERS,
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = error => {
    return { 
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

export function fetch() {
    return dispatch => {
        dispatch(fetchUsers())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            dispatch(fetchUsersError(error.message))
        })
    }
}