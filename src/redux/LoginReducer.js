import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAILURE,
    LOGOUT,
    RESET_PASSWORD_SEND_SUCCESS,
    RESET_PASSWORD_SEND_FAILURE,
    RESET_PASSWORD_CONFIRM_SUCCESS,
    RESET_PASSWORD_CONFIRM_FAILURE,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAILURE,
} from "./types";


const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    login_error: null,
    reset_error: null
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('access', action.payload.access);
            localStorage.setItem('refresh', action.payload.refresh);
            return {
                ...state,
                access: action.payload.access,
                refresh: action.payload.refresh,
                isAuthenticated: true,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
            }
        case SIGNUP_FAILURE:
        case LOGOUT:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
            }
        case LOGIN_FAILURE:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
                login_error: action.payload
            }
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOADED_FAILURE:
            return {
                ...state,
                user: null
            }
        case RESET_PASSWORD_SEND_FAILURE:
            return {
                ...state,
                reset_error: action.payload
            }
        case RESET_PASSWORD_SEND_SUCCESS:
            return {
                ...state,
                reset_error: null
            }
        case RESET_PASSWORD_CONFIRM_SUCCESS:
        case RESET_PASSWORD_CONFIRM_FAILURE:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAILURE:
            return {
                ...state
            }
        default:
            return state
    }
}