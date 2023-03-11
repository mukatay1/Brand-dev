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
import axios from "axios";


export const get_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }
        try {
            const response = await axios.get('http://127.0.0.1:8000/auth/users/me/', config)
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: response.data
            })
            console.log('get_user')

        } catch (err) {

            dispatch({
                type: USER_LOADED_FAILURE
            })
        }
    }
    else {
        dispatch({
            type: USER_LOADED_FAILURE
        })
    }
}

export const login = (email, password) => {
    return async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ email, password });
        try {
            const response = await axios.post('http://127.0.0.1:8000/auth/jwt/create/', body, config);

            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
            dispatch(get_user())
            console.log('logged')
        } catch (err) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: Object.values(err.response.data)
            })
        }
    }
}

export const sign_up = (name, email, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password, re_password })
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/', body, config)
        console.log(response)
        dispatch({
            type: SIGNUP_SUCCESS
        })
    } catch (err) {
        console.log(err.response.data)
        dispatch({
            type: SIGNUP_FAILURE
        })

    }
}

export const sign_up_activation = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ uid, token })
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/activation/', body, config)
        console.log(response)
        dispatch({
            type: ACTIVATION_SUCCESS
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: ACTIVATION_FAILURE
        })
    }
}

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({ email })
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/reset_password/', body, config)
        console.log(response)
        dispatch({
            type: RESET_PASSWORD_SEND_SUCCESS
        })
    } catch (err) {
        console.log(err.response.data.email)
        dispatch({
            type: RESET_PASSWORD_SEND_FAILURE,
            payload: Object.values(err.response.data)
        })
    }
}

export const reset_password_confirm = (uid, token, new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ uid, token, new_password })
    try {
        const response = await axios.post('http://127.0.0.1:8000/auth/users/reset_password_confirm/', body, config)
        console.log(response)
        dispatch({
            type: RESET_PASSWORD_CONFIRM_SUCCESS,
        })
    } catch (err) {
        console.log(err)
        dispatch({
            type: RESET_PASSWORD_CONFIRM_FAILURE,
        })
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}