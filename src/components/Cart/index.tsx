import React from 'react';
import {
  BoldText,
  Card,
  GameCard,
  GameDetailContainer,
  GameInfosContainer,
  GameTitle,
  LightParagraph,
  Marker,
  NumbersText,
} from './styles';

const Cart = () => {
  return (
    <Card>
      <BoldText>CART</BoldText>
      <GameCard>
        <Marker />
        <GameInfosContainer>
          <NumbersText>1,2,3,4,5,6,7,8,9,0</NumbersText>
          <GameDetailContainer>
            <GameTitle color="#7F3992">Teste</GameTitle>
            <LightParagraph>R$2,50</LightParagraph>
          </GameDetailContainer>
        </GameInfosContainer>
      </GameCard>
    </Card>
  );
};

export default Cart;
