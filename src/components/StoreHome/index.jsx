import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCartThunk } from "../../store/modules/cart/thunks";
import { Card, ContentCard } from "./styles";

const StoreHome = () => {
  const productsList = useSelector((state) => state.products);
  const dispatch = useDispatch();
  return (
    <div>
      <Card>
        {productsList.map((product) => (
          <ContentCard key={product.id}>
            <img src={product.image} alt={product.name} />{" "}
            <span>{product.name}</span> <span>R${product.price},00</span>
            <button onClick={() => dispatch(addToCartThunk(product))}>
              Adicionar
            </button>
          </ContentCard>
        ))}
      </Card>
    </div>
  );
};

export default StoreHome;
