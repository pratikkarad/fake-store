import { FETCH_PRODUCT_CATEGORY } from "../types";

export const LoginReducer = (state = {
        isLogin: false,
        categories : []
    }, action) => {
    switch(action.type){
        case FETCH_PRODUCT_CATEGORY:
            return{
                ...state,
                categories : action.payload
            }
        default:
            return state;
    }
}