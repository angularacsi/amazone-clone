
import { types } from "./action.type";
export const initialState = {
    cart: []

};




export const reducer = (state, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case types.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            };
        case types.UPDATE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id ? { ...item, ...action.payload } : item
                )
            };
        case types.CLEAR_CART:
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }

}
