import axios from "axios";
import {
    GET_CART,
    GET_CART_FAIL,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL
} from "./types";


export const get_cart = (pk) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/cart/${pk}/`, config)
        console.log(response.data)
        dispatch({
            type: GET_CART,
            payload: response.data
        })
    } catch (e) {
        console.log(e)
        dispatch({
            type: GET_CART_FAIL
        })
    }
}

export const add_item_to_cart = (product_id, cart) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    const body = JSON.stringify({ product_id, cart })
    try {
        await axios.post('http://127.0.0.1:8000/api/cart/items/', body, config)
        dispatch({
            type: ADD_TO_CART_SUCCESS
        })
    } catch (e) {
        console.log(e)
        dispatch({
            type: ADD_TO_CART_FAIL
        })
    }
}

export const remove_item_from_cart = (item_id) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    
    try {
        await axios.patch(`http://127.0.0.1:8000/api/cart/item/${item_id}/`, config)
        dispatch({
            type: REMOVE_FROM_CART_SUCCESS
        })
    } catch (e) {
        console.log(e)
        dispatch({
            type: REMOVE_FROM_CART_FAIL
        })
    }
}