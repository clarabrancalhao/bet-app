import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { IGameDone, removeFromCart } from '../../modules/cart/actions';
import { IoTrashOutline } from 'react-icons/io5';
import {
  BoldText,
  Card,
  DeleteButton,
  GameCard,
  GameDetailContainer,
  GameInfosContainer,
  GameTitle,
  LightParagraph,
  Marker,
  NumbersText,
} from './styles';

const Cart = () => {
  const dispatch = useDispatch();
  const games: IGameDone[] = useSelector(
    (state: RootStateOrAny) => state.cart.games
  );

  return (
    <Card>
      <BoldText>CART</BoldText>
      {games.map((game) => {
        return (
          <GameCard key={game.id}>
            <DeleteButton onClick={() => dispatch(removeFromCart(game.id))}>
              <IoTrashOutline size={24} color="#888888" />
            </DeleteButton>
            <Marker color={game.color} />
            <GameInfosContainer>
              <NumbersText>{game.selectedNumbers.join(', ')}</NumbersText>
              <GameDetailContainer>
                <GameTitle color={game.color}>{game.type}</GameTitle>
                <LightParagraph>{game.price}</LightParagraph>
              </GameDetailContainer>
            </GameInfosContainer>
          </GameCard>
        );
      })}
    </Card>
  );
};

export default Cart;
