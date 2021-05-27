import { FC } from 'react';
import { IoTrashOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../modules/cart/actions';

import {
  GameCard,
  DeleteButton,
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

const CartCard: FC<IProps> = (props) => {
  const dispatch = useDispatch();

  return (
    <GameCard key={props.id}>
      <DeleteButton onClick={() => dispatch(removeFromCart(props.id))}>
        <IoTrashOutline size={24} color="#888888" />
      </DeleteButton>
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

export default CartCard;
