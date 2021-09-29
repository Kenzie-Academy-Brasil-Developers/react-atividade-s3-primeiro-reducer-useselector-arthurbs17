//importando useSelector do react-redux
import { useSelector } from "react-redux";
import { Img, Container } from "./styles";

const FruitsPage = () => {
  //acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit, index) => (
        <Container>
          <Img src={fruit.image} alt={fruit} />
          <p key={index}> {fruit.name} </p>
        </Container>
      ))}
    </div>
  );
};

export default FruitsPage;
