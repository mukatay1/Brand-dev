import { GET_ITEM_SUCCESS, GET_ITEM_FAIL } from "./types";
import axios from "axios";

export const get_item = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/', config)
        console.log(response)
        dispatch({
            type: GET_ITEM_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: GET_ITEM_FAIL,
        })
        console.log(err)
    }
}