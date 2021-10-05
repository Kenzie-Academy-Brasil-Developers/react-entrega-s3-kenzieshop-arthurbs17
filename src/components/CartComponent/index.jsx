import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";

const CartComponent = () => {
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {cartList.map((product) => (
          <li>
            {product.name} {product.price}
            <button onClick={() => dispatch(removeFromCartThunk(product.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
