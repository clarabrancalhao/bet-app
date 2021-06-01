import { FC } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../modules/cart/actions';
import { ICartGame } from '../../utils/interfaces';
import { BUTTON_THEME } from '../Button/styles';
import Button from '../Button';

import {
  GameCard,
  InfosWrapper,
  Marker,
  GameDetailWrapper,
  NumbersText,
  GameTitle,
  LightParagraph,
} from './styles';

interface IProps {
  game: ICartGame;
}

const CartItem: FC<IProps> = (props) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(props));
  };

  return (
    <GameCard key={props.game.id}>
      <Button className={BUTTON_THEME.GHOST} onClick={handleRemoveItem}>
        <IoTrashOutline
          size={24}
          color="#888888"
          style={{ marginRight: '6px' }}
        />
      </Button>
      <Marker color={props.game.color} />
      <GameDetailWrapper>
        <NumbersText>{props.game.selectedNumbers.join(', ')}</NumbersText>
        <InfosWrapper>
          <GameTitle color={props.game.color}>{props.game.type}</GameTitle>
          <LightParagraph>
            {props.game.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </LightParagraph>
        </InfosWrapper>
      </GameDetailWrapper>
    </GameCard>
  );
};

export default CartItem;
