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
import { BUTTON_THEME } from '../Button/styles';
import Button from '../Button';
import { handleFormat } from '../../utils/handleFormat';

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
            return <CartItem key={game.id} game={game} />;
          })}
        </GamesWrapper>
        <TotalWrapper>
          <BoldText>CART</BoldText>
          <LightText>TOTAL: {handleFormat(totalAmount)}</LightText>
        </TotalWrapper>
      </ContentWrapper>
      <Button className={BUTTON_THEME.SAVE_CART} onClick={handleSaveCart}>
        Save
      </Button>
    </Card>
  );
};

export default Cart;
