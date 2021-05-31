import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ICartGame } from '../../utils/interfaces';
import {
  BoldText,
  Card,
  Content,
  GamesContainer,
  LightText,
  TotalContainer,
} from './styles';
import CartItem from '../CartItem';
import { saveCart } from '../../modules/cart/actions';
import { Button, BUTTON_THEME } from '../Button/styles';

const Cart = () => {
  const dispatch = useDispatch();

  const games: ICartGame[] = useSelector(
    (state: RootStateOrAny) => state.cart.games
  );
  const totalAmount = useSelector(
    (state: RootStateOrAny) => state.cart.totalAmount
  );

  const handleSaveCart = () => {
    if (totalAmount > games[0]['min-cart-value']) {
      dispatch(saveCart(games));
    }
  };

  return (
    <Card>
      <Content>
        <BoldText>CART</BoldText>
        <GamesContainer>
          {games?.map((game) => {
            return (
              <CartItem
                key={game.id}
                id={game.id}
                color={game.color}
                type={game.type}
                selectedNumbers={game.selectedNumbers}
                price={game.price}
              />
            );
          })}
        </GamesContainer>
        <TotalContainer>
          <BoldText>CART</BoldText>
          <LightText>
            TOTAL:{' '}
            {totalAmount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </LightText>
        </TotalContainer>
      </Content>
      <Button className={BUTTON_THEME.SAVE_CART} onClick={handleSaveCart}>
        Save
      </Button>
    </Card>
  );
};

export default Cart;
