import { FC } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../modules/cart/actions';
import { Button, BUTTON_THEME } from '../Button/styles';

import {
  GameCard,
  GameDetailContainer,
  Marker,
  GameInfosContainer,
  NumbersText,
  GameTitle,
  LightParagraph,
} from './styles';

interface IProps {
  type: string;
  color: string;
  id: number;
  selectedNumbers: number[];
  price: number;
}

const CartItem: FC<IProps> = (props) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeFromCart(props));
  };

  return (
    <GameCard key={props.id}>
      <Button className={BUTTON_THEME.GHOST} onClick={handleRemoveItem}>
        <IoTrashOutline
          size={24}
          color="#888888"
          style={{ marginRight: '6px' }}
        />
      </Button>
      <Marker color={props.color} />
      <GameInfosContainer>
        <NumbersText>{props.selectedNumbers.join(', ')}</NumbersText>
        <GameDetailContainer>
          <GameTitle color={props.color}>{props.type}</GameTitle>
          <LightParagraph>
            {props.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </LightParagraph>
        </GameDetailContainer>
      </GameInfosContainer>
    </GameCard>
  );
};

export default CartItem;
