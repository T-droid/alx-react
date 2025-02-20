import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from './uiActionTypes';

export function login(email, password) {
    return {
        type: LOGIN,
        user: {
            email,
            password
        }
    }
}
export const boundLogin = (email, password) => dispatch(login(email, password));

export function logout() {
    return {
        type: LOGOUT
    }
}
export const boundLogout = () => dispatch(logout());

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER
    }
}
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER
    }
}
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer())

export function loginSuccess() {
    return {
        type: LOGIN_SUCCESS
    }
}

export function loginFailure() {
    return {
        type: LOGIN_FAILURE
    }
}

export const loginRequest = (email, password) => {
    return function (dispatch) {
        dispatch(login(email, password));
        return fetch('http://localhost:3000/login-success.json')
        .then((response) => response.json())
        .then((json) => dispatch(loginSuccess()))
        .catch((err) => dispatch(loginFailure()))
    };
}