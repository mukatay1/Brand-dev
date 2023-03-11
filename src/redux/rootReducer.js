import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { ItemReducer } from "./ItemReducer";
import { CartReducer } from "./CartReducer";

export const rootReducer = combineReducers({
    login: LoginReducer,
    item: ItemReducer,
    cart: CartReducer
})