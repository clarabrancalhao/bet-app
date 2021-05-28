import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ICartGame } from '../../utils/interfaces';
import {
  BoldText,
  Card,
  Content,
  LightText,
  SaveButton,
  TotalContainer,
} from './styles';
import CartCard from '../CartCard';
import { saveCart } from '../../modules/cart/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const games: ICartGame[] = useSelector(
    (state: RootStateOrAny) => state.cart.games
  );

  const total = useSelector((state: RootStateOrAny) => state.cart.totalAmount);

  const handleSaveCart = () => {
    if (total > games[0]['min-cart-value']) {
      dispatch(saveCart(games));
    }
  };

  return (
    <Card>
      <Content>
        <BoldText>CART</BoldText>
        {games?.map((game) => {
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
        <TotalContainer>
          <BoldText>CART</BoldText>
          <LightText>
            TOTAL:{' '}
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </LightText>
        </TotalContainer>
      </Content>
      <SaveButton onClick={handleSaveCart}>Save</SaveButton>
    </Card>
  );
};

export default Cart;
