import {
  FETCH_PRODUCT_CATEGORY,
  USER_DETAILS,
  USER_LOGOUT,
  LOADING,
} from "../types";

export const LoginReducer = (
  state = {
    isLogin: false,
    categories: [],
    userDetails: null,
    isLoginLoading: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCT_CATEGORY:
      return {
        ...state,
        categories: action.payload,
        isLoginLoading: false,
      };
    case USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
        isLogin: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userDetails: null,
        isLogin: false,
      };
    case LOADING:
      return {
        ...state,
        isLoginLoading: true,
      };
    default:
      return state;
  }
};
