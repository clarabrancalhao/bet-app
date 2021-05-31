import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { ICartGame } from '../../utils/interfaces';
import {
  BoldText,
  Card,
  ContentWrapper,
  GamesWrapper,
  LightText,
  TotalWrapper,
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
      <ContentWrapper>
        <BoldText>CART</BoldText>
        <GamesWrapper>
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
        </GamesWrapper>
        <TotalWrapper>
          <BoldText>CART</BoldText>
          <LightText>
            TOTAL:{' '}
            {totalAmount.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </LightText>
        </TotalWrapper>
      </ContentWrapper>
      <Button className={BUTTON_THEME.SAVE_CART} onClick={handleSaveCart}>
        Save
      </Button>
    </Card>
  );
};

export default Cart;
