import { FETCH_PRODUCTS } from "../types";

export const ProductsReducer = (state = {
        products : null,
    }, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return{
                ...state,
                products : action.payload
            }
        default:
            return state;
    }
}