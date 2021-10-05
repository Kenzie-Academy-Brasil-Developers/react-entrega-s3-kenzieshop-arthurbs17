import { ADD_CART, REMOVE_CART } from "./actionTypes";

export const addToCart = (product) => {
  return { type: ADD_CART, product };
};

export const removeFromCart = (list) => {
  return { type: REMOVE_CART, list };
};
