import { FETCH_PRODUCT_CATEGORY } from "../types";

export const fetchCategories = () => async dispatch => {
    const res = await fetch('https://fakestoreapi.com/products/categories');
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCT_CATEGORY,
        payload: data
    })
}