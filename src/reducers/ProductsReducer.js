import { FETCH_PRODUCTS, LOADING } from "../types";

export const ProductsReducer = (
  state = {
    products: null,
    isProductsLoading: false,
  },
  action
) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isProductsLoading: false,
      };
    case LOADING:
      return {
        ...state,
        isProductsLoading: true,
      };
    default:
      return state;
  }
};
