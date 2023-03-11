import { GET_ITEM_SUCCESS, GET_ITEM_FAIL } from "./types"

const initialState = {
    items: [],
}

export const ItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEM_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        case GET_ITEM_FAIL:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            }
    }
}