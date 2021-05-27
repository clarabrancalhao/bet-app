import { RootStateOrAny, useSelector } from 'react-redux';
import { ICartGame } from '../../utils/interfaces';
import { BoldText, Card, Content, SaveButton } from './styles';
import CartCard from '../CartCard';

const Cart = () => {
  const games: ICartGame[] = useSelector(
    (state: RootStateOrAny) => state.cart.games
  );

  return (
    <Card>
      <Content>
        <BoldText>CART</BoldText>
        {games.map((game) => {
          return (
            <CartCard
              key={game.id}
              id={game.id}
              color={game.color}
              type={game.type}
              selectedNumbers={game.selectedNumbers}
              price={game.price}
            />
          );
        })}
      </Content>
      <SaveButton>Save</SaveButton>
    </Card>
  );
};

export default Cart;
