import { addToCart, removeFromCart } from "./actions";
import { products } from "../../../data/data";

export const addToCartThunk = (product) => {
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    const verify = list.find((ver) => product.id === ver.id);
    if (verify === undefined) {
      list.push(product);
      localStorage.setItem("cart", JSON.stringify(list));

      dispatch(addToCart(product));
    } else {
      const index = list.findIndex((product) => product.id === verify.id);
      const price = products.find((product) => product.id === verify.id);
      list[index].quantity += 1;
      list[index].price = list[index].quantity * price.price;

      localStorage.setItem("cart", JSON.stringify(list));
      dispatch(addToCart(list));
    }
  };
};

export const removeFromCartThunk = (productId) => {
  return (dispatch, getStore) => {
    const { cart } = getStore();

    const list = cart.filter((product) => product.id !== productId);
    localStorage.setItem("cart", JSON.stringify(list));

    dispatch(removeFromCart(list));
  };
};
