import { ADD_CART, REMOVE_CART } from "./actionTypes";

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];

    case REMOVE_CART:
      const { list } = action;

      return list;

    default:
      return state;
  }
};

export default cartReducer;
