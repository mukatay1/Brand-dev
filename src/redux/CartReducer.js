import {
    GET_CART,
    GET_CART_FAIL,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAIL,
    REMOVE_FROM_CART_SUCCESS,
    REMOVE_FROM_CART_FAIL
} from "./types"

const initialState = {
    cart: null,
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
                cart: action.payload
            }
        case REMOVE_FROM_CART_SUCCESS:
        case REMOVE_FROM_CART_FAIL:
        case ADD_TO_CART_SUCCESS:
        case ADD_TO_CART_FAIL:
        case GET_CART_FAIL:
        default:
            return {
                ...state,
            }
    }
}