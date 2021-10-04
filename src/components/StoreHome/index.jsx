import { products } from "../../data/data";
import { Card, ContentCard } from "./styles";

const StoreHome = () => {
  const productsList = products;
  return (
    <div>
      <Card>
        {productsList.map((product) => (
          <ContentCard>
            <img src={product.image} alt={product.name} /> <p>{product.name}</p>{" "}
            <p>R${product.price},00</p>
            <button>Adicionar</button>
          </ContentCard>
        ))}
      </Card>
    </div>
  );
};

export default StoreHome;
