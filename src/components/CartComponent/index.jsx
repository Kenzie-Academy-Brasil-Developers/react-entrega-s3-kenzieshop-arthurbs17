import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeFromCartThunk } from "../../store/modules/cart/thunks";
import { Container, ContentLi, ContentUl } from "./styles";

const CartComponent = () => {
  const cartList = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cartList.reduce((acc, num) => acc + num.price, 0);

  return (
    <Container>
      <ContentUl>
        {cartList.map((product) => (
          <ContentLi>
            <h4>{product.name}</h4>
            <span>R$: {product.price},00</span>
            <button onClick={() => dispatch(removeFromCartThunk(product.id))}>
              Remover
            </button>
          </ContentLi>
        ))}
      </ContentUl>
      <h3>Total: {totalPrice}</h3>
    </Container>
  );
};

export default CartComponent;
