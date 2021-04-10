import {
  FETCH_PRODUCT_CATEGORY,
  USER_DETAILS,
  USER_LOGOUT,
  LOADING,
} from "../types";

export const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  dispatch({
    type: FETCH_PRODUCT_CATEGORY,
    payload: data,
  });
};

export const setUserDetails = (email, password) => (dispatch) => {
  dispatch({
    type: USER_DETAILS,
    payload: {
      email,
      password,
    },
  });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT,
  });
};
