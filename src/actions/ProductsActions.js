import { FETCH_PRODUCTS, LOADING } from "../types";

export const fetchProducts = (category) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};
